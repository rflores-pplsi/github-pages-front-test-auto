class EnvironmentUtil {

  getEnv() {
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

  getEnvUrlString() {
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

  getLaunchUrlString() {
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

  getWordpessEnvURLString() {
    let wordPressEnvUrlString = null;
    const env = this.getEnv();

    switch (env) {
      // update if/when marketing site (wordpress) is avilable on dev
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

  getEnvUrlWPString() {
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