import {expect} from 'chai';
import DynamicLoadingPage from 'src/pages/DynamicLoadingPage';

describe('Dynamic loading', () => {
    it('is no problem with waitUntil', () => {
        DynamicLoadingPage.open;
        DynamicLoadingPage.elementExistsButIsHidden;
        DynamicLoadingPage.start;
        DynamicLoadingPage.waitUntilElementIsDisplayed();

        expect(DynamicLoadingPage.finishText).to.eq('Hello World!');
    });

    it('even when element is rendered after loading', () => {
        DynamicLoadingPage.open;
        DynamicLoadingPage.elementIsRenderedAfterLoading;
        DynamicLoadingPage.start;
        DynamicLoadingPage.waitUntilElementIsDisplayed();

        expect(DynamicLoadingPage.finishText).to.eq('Hello World!');
    });
});
