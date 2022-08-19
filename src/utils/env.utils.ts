/* eslint-disable require-jsdoc */
// import { load_dotenv } from 'dotenv';
require('dotenv').config();

/**
 * @class EnvironmentUtil
 */
class EnvironmentUtil {
  /**
   * @return {*}
   * @memberof EnvironmentUtil
   */
  getEnv(): any {
    let env = null;
    if (process.env.USE_PROD == 'true' || process.env.USE_PRODUCTION == 'true') {
      env = 'prod';
    } else if (process.env.USE_UAT == 'true') {
      env = 'uat';
    } else if (process.env.USE_STAGE == 'true') {
      env = 'stage';
    } else env = 'dev';
    return env;
  }
  /**
   *
   *
   * @return {*}
   * @memberof EnvironmentUtil
   */
  getEnvUrlString(): any {
    let envUrlString = null;
    const env = this.getEnv();
    switch (env) {
      case 'dev':
        envUrlString = 'dev-';
        break;
      case 'uat':
        envUrlString = 'uat-';
        break;
      case 'prod':
        envUrlString = '';
        break;
    }
    return envUrlString;
  }

  getWalsEnvUrlString(): any {
    let envWalsUrlString = null;
    const env = this.getEnv();
    switch (env) {
      case 'dev':
        envWalsUrlString = 'dev.';
        break;
      case 'uat':
        envWalsUrlString = 'stage.';
        break;
      case 'prod':
        envWalsUrlString = '';
        break;
    }
    return envWalsUrlString;
  }
  /**
   *
   *
   * @return {*}
   * @memberof EnvironmentUtil
   */
  getDropDownEnvironmentOptions(): any {
    let envDropDownString = '';
    const env = this.getEnv();
    // This is to convert Environment variable set in the command line to a format usable by planalyzer dropdown
    switch (env) {
      case 'dev':
        envDropDownString = 'STG';
        break;
      case 'uat':
        envDropDownString = 'UAT';
        break;
      case 'prod':
        envDropDownString = 'PROD';
        break;
    }
    return envDropDownString;
  }

  /**
   *
   *
   * @return {*}
   * @memberof EnvironmentUtil
   */
  getLaunchUrlString(): any {
    let envLaunchUrlString = null;
    const env = this.getEnv();
    switch (env) {
      case 'dev':
        envLaunchUrlString = 'lsusdev';
        break;
      case 'uat':
        envLaunchUrlString = 'uat';
        break;
      case 'prod':
        envLaunchUrlString = 'prod';
        break;
    }
    return envLaunchUrlString;
  }

  /**
   *
   *
   * @return {*}
   * @memberof EnvironmentUtil
   */
  getTestHarnessUrlString(): any {
    let envTestHarnessUrlString = null;
    const env = this.getEnv();
    switch (env) {
      case 'dev':
        envTestHarnessUrlString = 'dev';
        break;
      case 'uat':
        envTestHarnessUrlString = 'uat';
        break;
      case 'prod':
        envTestHarnessUrlString = 'prod';
        break;
    }
    return envTestHarnessUrlString;
  }
  /**
   *
   *
   * @return {*}
   * @memberof EnvironmentUtil
   */
  getWordpessEnvURLString(): any {
    let wordPressEnvUrlString = null;
    const env = this.getEnv();
    switch (env) {
      // update if/when marketing site (wordpress) is available on dev
      // case 'dev':
      //   envUrlString = 'dev-';
      //   break;
      case 'uat':
        wordPressEnvUrlString = 'stg';
        break;
      case 'prod':
        wordPressEnvUrlString = 'prod';
        break;
    }
    return wordPressEnvUrlString;
  }
  /**
   *
   *
   * @return {*}
   * @memberof EnvironmentUtil
   */
  getEnvUrlWPString(): any {
    let envUrlString = null;
    const env = this.getEnv();
    switch (env) {
      case 'stage':
        envUrlString = 'stg';
        break;
      case 'prod':
        envUrlString = 'prod';
        break;
    }
    return envUrlString;
  }
}
export default new EnvironmentUtil();
