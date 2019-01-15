import BasePage from 'src/pages/BasePage';

class DynamicLoadingPage extends BasePage {
    get open() {
        return browser.url('/dynamic_loading');
    }

    get elementExistsButIsHidden() {
        return $('[href="/dynamic_loading/1"]').click();
    }

    get elementIsRenderedAfterLoading() {
        return $('[href="/dynamic_loading/2"]').click();
    }

    get start() {
        return $('#start > button').click();
    }

    get finishElement() {
        return $('#finish > h4');
    }

    get finishText() {
        return this.finishElement.getText();
    }

    waitUntilElementIsDisplayed() {
        browser.waitUntil(() => {
            return this.finishElement.isDisplayed();
        });
    }
}

export default new DynamicLoadingPage();
