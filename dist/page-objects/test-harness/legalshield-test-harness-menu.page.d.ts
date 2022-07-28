import { LegalshieldTestHarnessCartComponent } from './legalshield-test-harness-cart.component';
/**
 *
 *
 * @export
 * @class idshieldTestHarnessMenuPage
 * @extends {LoginPage}
 */
export declare class LegalshieldTestHarnessMenuPage extends LegalshieldTestHarnessCartComponent {
    addProducts: (productNames: Array<string>) => Promise<void>;
    completeQualifyingQuestionairreWithNos: () => Promise<void>;
    /**
     * @param {string} region
     * @memberof LegalshieldTestHarnessMenuPage
     */
    selectTestHarnessRegion: (region: string) => Promise<void>;
    clickProductButton: (productName: string) => Promise<void>;
    clickPubliclyTradedNoRadioButton: () => Promise<void>;
    clickNonProfitNoRadioButton: () => Promise<void>;
    clickAddToCartButton: () => Promise<void>;
}
