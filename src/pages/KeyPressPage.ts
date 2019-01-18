import BasePage from 'src/pages/BasePage';

class KeyPressPage extends BasePage {
    get open() {
        return browser.url('/key_presses');
    }

    get result() {
        return $('#result').getText();
    }

    submitKeyPress(value) {
        // Supported values are here: https://w3c.github.io/webdriver/#keyboard-actions
        return browser.keys(value);
    }
}

export default new KeyPressPage();
