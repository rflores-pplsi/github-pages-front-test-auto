import { StatusHeaderPage } from './status-header.page';
/**
 * @export
 * @class StatusPage
 * @extends {StatusHeaderPage}
 */
export declare class StatusPage extends StatusHeaderPage {
    clickSignInFromHeader: () => Promise<void>;
    assertStatusPageLoginRedirectUrl: () => Promise<void>;
}
