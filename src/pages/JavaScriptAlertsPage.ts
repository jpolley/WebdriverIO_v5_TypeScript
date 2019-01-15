import BasePage from 'src/pages/BasePage';

class JavaScriptAlertsPage extends BasePage {
    get open() {
        return browser.url('/javascript_alerts');
    }

    get clickForAlert() {
        return browser.$('button=Click for JS Alert').click();
    }

    get result() {
        return $('#result').getText();
    }
}

export default new JavaScriptAlertsPage();
