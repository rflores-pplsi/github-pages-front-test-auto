import BasePage from './base.page';
import EnvironmentUtil from '../../utils/env.util';

class CsrCheckoutPage extends BasePage {

  constructor() {
    super();
  };

  // getters 
  get environmentDropdown() { return $('.choose-environment input'); };

  selectEnvironment() {
   const env = EnvironmentUtil.getEnv();
   let displayedEnvText = '';
   switch (env) {
    case 'dev':
      displayedEnvText = 'STG';
      break;
    case 'uat':
      displayedEnvText = 'UAT';
      break;
    case 'prod':
      displayedEnvText = 'PROD';
      break;
    }
    this.environmentDropdown.selectByVisibleText(displayedEnvText);
  };
};

export default new CsrCheckoutPage(); 