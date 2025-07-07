import { test, expect } from '@playwright/test';

// @lawfirm
test.describe('LegalShield Law Firm Directory (Production)', () => {
  test('@lawfirm should load and display key sections, and update results by state', async ({ page }) => {
    await page.goto('https://www.legalshield.com/law-firms');

    // Main heading
    await expect(page.getByRole('heading', { name: /find a lawyer/i })).toBeVisible();

    // State selector should be visible
    const stateSelect = page.locator('select#Select-State');
    await expect(stateSelect).toBeVisible();

    // Get all state options except the first (placeholder)
    const options = await stateSelect.locator('option:not(:first-child)').all();
    expect(options.length).toBeGreaterThan(0);
    const randomIndex = Math.floor(Math.random() * options.length);
    const randomOption = options[randomIndex];
    const randomValue = await randomOption.getAttribute('value');
    expect(randomValue).toBeTruthy();
    await stateSelect.selectOption(randomValue!);

    // Law firm results list should be visible
    const resultsList = page.locator('div.lawyer-search_list[role="list"]');
    await expect(resultsList).toBeVisible();
    // At least one result should be present
    const resultItems = resultsList.locator('[role="listitem"]');
    await expect(resultItems.first()).toBeVisible();

    // FAQ section should be visible
    const faqSection = page.locator('section:has(div.axiom-design-system--faq-left_question)');
    await expect(faqSection).toBeVisible();
    // Select and click the first FAQ question
    const firstFaqButton = faqSection.locator('div.axiom-design-system--faq-left_question').first();
    await expect(firstFaqButton).toBeVisible();
    await firstFaqButton.click();
    // After clicking, the answer should become visible: look for the next parent div with class 'axiom-design-system--faq-left_answer' to not have a height style
    const answerDiv = firstFaqButton.locator('xpath=following-sibling::div[contains(@class, "axiom-design-system--faq-left_answer")]').first();
    await expect(answerDiv).toBeVisible();
  });
});
