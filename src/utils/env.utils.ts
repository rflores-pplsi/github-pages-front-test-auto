import * as dotenv from 'dotenv';
dotenv.config();

/**
 * @class EnvironmentUtil
 */
class EnvironmentUtil {
  /**
   *
   *
   * @return {*}  {string}
   * @memberof EnvironmentUtil
   */
  getEnv(): string {
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
   * @return {*}  {(string | null)}
   * @memberof EnvironmentUtil
   */
  getEnvUrlString(): string | null {
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
  /**
   *
   *
   * @return {*}  {(string | null)}
   * @memberof EnvironmentUtil
   */
  getWalsEnvUrlString(): string | null {
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
   * @return {*}  {string}
   * @memberof EnvironmentUtil
   */
  getDropDownEnvironmentOptions(): string {
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
   * @return {*}  {(string | null)}
   * @memberof EnvironmentUtil
   */
  getLaunchUrlString(): string | null {
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
   * @return {*}  {(string | null)}
   * @memberof EnvironmentUtil
   */
  getTestHarnessUrlString(): string | null {
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
   * @return {*}  {(string | null)}
   * @memberof EnvironmentUtil
   */
  getWordpressEnvURLString(): string | null {
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
   * @return {*}  {(string | null)}
   * @memberof EnvironmentUtil
   */
  getEnvUrlWPString(): string | null {
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
