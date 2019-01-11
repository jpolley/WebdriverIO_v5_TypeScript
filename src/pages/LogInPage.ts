import BasePage from "src/pages/BasePage";

class LoginPage extends BasePage {

    get username() {
        return $("#username");
    }

    get password() {
        return $("#password");
    }

    get submit() {
        return $("#login > button");
    }

    get flash() {
        return $("#flash").getText();
    }

    public open() {
        browser.url("/login");
    }

}
export default new LoginPage();
