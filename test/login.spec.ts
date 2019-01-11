import {expect} from "chai";
import LoginPage from "src/pages/LogInPage";

describe("Login page", () => {
    it("displays message with invalid credentials", () => {
        LoginPage.open();
        LoginPage.username.setValue("foo");
        LoginPage.password.setValue("bar");
        LoginPage.submit.click();
        expect(LoginPage.flash).to.include("Your username is invalid!");
    });

    it("should allow access with correct credentials", () => {
        LoginPage.open();
        LoginPage.username.setValue("tomsmith");
        LoginPage.password.setValue("SuperSecretPassword!");
        LoginPage.submit.click();
        expect(LoginPage.flash).to.contain("You logged into a secure area!");
    });
});
