import {expect} from 'chai';
import JavaScriptAlertsPage from 'src/pages/JavaScriptAlertsPage';

describe('JavaScript Alerts', () => {
    it('can be accepted', () => {
        JavaScriptAlertsPage.open;
        JavaScriptAlertsPage.clickForAlert;

        browser.acceptAlert();

        expect(JavaScriptAlertsPage.result).to.eq('You successfuly clicked an alert');
    });
});
