import { LoginPage } from '../login/login.page';
/**
 *
 *
 * @export
 * @class idshieldTestHarnessMenuPage
 * @extends {LoginPage}
 */
export declare class LegalshieldCanadaTestHarnessMenuPage extends LoginPage {
    addProducts: (productNames: Promise<Object>) => Promise<void>;
    clickProductButton: (productName: string) => Promise<void>;
}
