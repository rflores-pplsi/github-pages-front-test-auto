/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/utils/env.utils.ts":
/*!********************************!*\
  !*** ./src/utils/env.utils.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// import { load_dotenv } from 'dotenv';
/**
 * @class EnvironmentUtil
 */
class EnvironmentUtil {
    /**
     * @return {*}
     * @memberof EnvironmentUtil
     */
    getEnv() {
        let env = null;
        if (process.env.USE_PROD == 'true' || process.env.USE_PRODUCTION == 'true') {
            env = 'prod';
        }
        else if (process.env.USE_UAT == 'true') {
            env = 'uat';
        }
        else if (process.env.USE_STAGE == 'true') {
            env = 'stage';
        }
        else
            env = 'dev';
        return env;
    }
    /**
     *
     *
     * @return {*}
     * @memberof EnvironmentUtil
     */
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
    /**
     *
     *
     * @return {*}
     * @memberof EnvironmentUtil
     */
    getDropDownEnvironmentOptions() {
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
    /**
     *
     *
     * @return {*}
     * @memberof EnvironmentUtil
     */
    getTestHarnessUrlString() {
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
    getWordpessEnvURLString() {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new EnvironmentUtil());


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "associateAdvantagePlus": () => (/* binding */ associateAdvantagePlus),
/* harmony export */   "associateBasic": () => (/* binding */ associateBasic),
/* harmony export */   "associateLegacy": () => (/* binding */ associateLegacy),
/* harmony export */   "associateReportsCommissions": () => (/* binding */ associateReportsCommissions),
/* harmony export */   "associateReportsCommissions2": () => (/* binding */ associateReportsCommissions2),
/* harmony export */   "associateUser": () => (/* binding */ associateUser),
/* harmony export */   "basicUser": () => (/* binding */ basicUser),
/* harmony export */   "canadianUser": () => (/* binding */ canadianUser),
/* harmony export */   "dependentUser": () => (/* binding */ dependentUser),
/* harmony export */   "oktaUser": () => (/* binding */ oktaUser),
/* harmony export */   "resetPasswordUser": () => (/* binding */ resetPasswordUser),
/* harmony export */   "revenueReports": () => (/* binding */ revenueReports),
/* harmony export */   "withPlans": () => (/* binding */ withPlans),
/* harmony export */   "withUsername": () => (/* binding */ withUsername),
/* harmony export */   "withoutUsername": () => (/* binding */ withoutUsername)
/* harmony export */ });
/* harmony import */ var _utils_env_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/env.utils */ "./src/utils/env.utils.ts");

// import { config } from 'dotenv';
const env = _utils_env_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getEnv();
const associateUser = {
    username: process.env[`ASSOCIATE_USERNAME_${env.toUpperCase()}`],
    password: process.env[`ASSOCIATE_PASSWORD_${env.toUpperCase()}`],
};
const basicUser = {
    username: process.env[`LOGIN_USERNAME_${env.toUpperCase()}`],
    email: process.env[`LOGIN_EMAIL_${env.toUpperCase()}`],
    password: process.env[`LOGIN_PASSWORD_${env.toUpperCase()}`],
};
const oktaUser = {
    email: process.env[`OKTA_EMAIL_${env.toUpperCase()}`],
    password: process.env[`OKTA_PASSWORD_${env.toUpperCase()}`],
};
const resetPasswordUser = {
    email: process.env[`RESET_USER_EMAIL_${env.toUpperCase()}`],
};
const associateBasic = {
    username: process.env[`ASSOCIATE_BASIC_USERNAME_${env.toUpperCase()}`],
    password: process.env[`ASSOCIATE_BASIC_PASSWORD_${env.toUpperCase()}`],
};
const associateLegacy = {
    username: process.env[`ASSOCIATE_LEGACY_USERNAME_${env.toUpperCase()}`],
    password: process.env[`ASSOCIATE_LEGACY_PASSWORD_${env.toUpperCase()}`],
};
const associateAdvantagePlus = {
    username: process.env[`ASSOCIATE_ADVANTAGE_PLUS_USERNAME_${env.toUpperCase()}`],
    password: process.env[`ASSOCIATE_ADVANTAGE_PLUS_PASSWORD_${env.toUpperCase()}`],
};
const dependentUser = {
    email: process.env[`DEPENDENT_EMAIL_${env.toUpperCase()}`],
    password: process.env[`DEPENDENT_PASSWORD_${env.toUpperCase()}`],
};
const withUsername = {
    email: process.env[`WITHUSERNAME_EMAIL_${env.toUpperCase()}`],
    password: process.env[`WITHUSERNAME_PASSWORD_${env.toUpperCase()}`],
};
const withoutUsername = {
    email: process.env[`WITHOUTUSERNAME_EMAIL_${env.toUpperCase()}`],
    password: process.env[`WITHOUTUSERNAME_PASSWORD_${env.toUpperCase()}`],
};
const withPlans = {
    email: process.env[`WITHPLANS_EMAIL_${env.toUpperCase()}`],
    password: process.env[`WITHPLANS_PASSWORD_${env.toUpperCase()}`],
};
const associateReportsCommissions = {
    username: process.env[`ASSOCIATE_REPORTS_COMMISSIONS_USERNAME_${env.toUpperCase()}`],
    password: process.env[`ASSOCIATE_REPORTS_COMMISSIONS_PASSWORD_${env.toUpperCase()}`],
};
const canadianUser = {
    email: process.env[`LSCANADAUSER_EMAIL_${env.toUpperCase()}`],
    password: process.env[`LSCANADAUSER_PASSWORD_${env.toUpperCase()}`],
};
const associateReportsCommissions2 = {
    username: process.env[`ASSOCIATE_REPORTS_COMMISSIONS_USERNAME2_${env.toUpperCase()}`],
    password: process.env[`ASSOCIATE_REPORTS_COMMISSIONS_PASSWORD2_${env.toUpperCase()}`],
};
const revenueReports = {
    username: process.env[`REVENUE_REPORTS_USERNAME_${env.toUpperCase()}`],
    password: process.env[`REVENUE_REPORTS_PASSWORD_${env.toUpperCase()}`],
};

})();

/******/ })()
;