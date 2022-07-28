import { LoginPage } from './login.page';
/**
 * @export
 * @class LoginHeaderPage
 * @extends {LoginPage}
 */
export declare class LoginHeaderPage extends LoginPage {
    changeMarketToEnUs: () => Promise<void>;
    changeMarketToEsUS: () => Promise<void>;
    changeMarketToEnCa: () => Promise<void>;
    changeMarketToFrCa: () => Promise<void>;
    clickPplsiLogo: () => Promise<void>;
    clickHelpButton: () => Promise<void>;
    navigateToLoginPage: () => Promise<void>;
    assertMarketIsUnitedStatesEnglish: () => Promise<void>;
    assertMarketIsEstadosUnidosEspanol: () => Promise<void>;
    assertMarketIsCanadaEnglish: () => Promise<void>;
    assertMarketIsCanadaFrench: () => Promise<void>;
    assertPplsiUrl: () => Promise<void>;
    assertSupportNumbersInHelpDropdown: () => Promise<void>;
}
