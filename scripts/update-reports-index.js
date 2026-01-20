#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * This script generates a reports-index.json file that contains metadata
 * about all test runs for the GitHub Pages dashboard.
 */

const REPORTS_INDEX_PATH = 'reports-index.json';

function getReportMetadata() {
    const runId = process.env.GITHUB_RUN_ID || Date.now().toString();
    const timestamp = new Date().toISOString();
    const suite = process.env.TEST_SUITE || 'Unknown Suite';
    const branch = process.env.GITHUB_REF_NAME || 'main';
    const status = process.env.TEST_STATUS || 'success';
    
    // Try to read CTRF report for test metrics
    let testMetrics = {
        passed: 0,
        failed: 0,
        skipped: 0,
        total: 0,
        duration: 0
    };
    
    try {
        const ctrfPath = path.join(__dirname, '..', 'ctrf', 'ctrf-report.json');
        if (fs.existsSync(ctrfPath)) {
            const ctrfData = JSON.parse(fs.readFileSync(ctrfPath, 'utf8'));
            
            if (ctrfData.results && ctrfData.results.summary) {
                const summary = ctrfData.results.summary;
                testMetrics = {
                    passed: summary.passed || 0,
                    failed: summary.failed || 0,
                    skipped: summary.skipped || 0,
                    total: summary.tests || 0,
                    duration: summary.stop - summary.start || 0
                };
            }
        }
    } catch (error) {
        console.warn('Could not read CTRF report:', error.message);
    }
    
    return {
        runId,
        timestamp,
        suite,
        branch,
        status,
        ...testMetrics,
        url: `./reports/${runId}/`
    };
}

function updateReportsIndex() {
    const newReport = getReportMetadata();
    
    console.log('Adding report metadata:', newReport);
    
    let reportsIndex = [];
    
    // Load existing reports index
    if (fs.existsSync(REPORTS_INDEX_PATH)) {
        try {
            const content = fs.readFileSync(REPORTS_INDEX_PATH, 'utf8');
            reportsIndex = JSON.parse(content);
            console.log(`Loaded ${reportsIndex.length} existing reports`);
        } catch (error) {
            console.warn('Could not parse existing reports index:', error.message);
            reportsIndex = [];
        }
    }
    
    // Remove duplicate if run ID already exists
    reportsIndex = reportsIndex.filter(r => r.runId !== newReport.runId);
    
    // Add new report at the beginning
    reportsIndex.unshift(newReport);
    
    // Filter out reports older than 5 days
    const FIVE_DAYS_MS = 5 * 24 * 60 * 60 * 1000;
    const cutoffDate = Date.now() - FIVE_DAYS_MS;
    reportsIndex = reportsIndex.filter(r => {
        const reportDate = new Date(r.timestamp).getTime();
        return reportDate > cutoffDate;
    });
    
    // Keep only last 50 reports as a safety limit
    if (reportsIndex.length > 50) {
        reportsIndex = reportsIndex.slice(0, 50);
        console.log('Trimmed to 50 most recent reports');
    }
    
    // Save updated index
    fs.writeFileSync(REPORTS_INDEX_PATH, JSON.stringify(reportsIndex, null, 2));
    console.log(`Updated reports index with ${reportsIndex.length} reports`);
    console.log(`Reports index saved to: ${path.resolve(REPORTS_INDEX_PATH)}`);
}

// Run the update
try {
    updateReportsIndex();
    process.exit(0);
} catch (error) {
    console.error('Error updating reports index:', error);
    process.exit(1);
}
