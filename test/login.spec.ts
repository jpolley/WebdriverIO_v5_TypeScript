import {expect} from 'chai';
import LoginPage from 'src/pages/LogInPage';

describe('Login page', () => {
    it('displays message with invalid credentials', () => {
        LoginPage.open;
        LoginPage.loginWithCredentials('foo', 'bar');

        expect(LoginPage.flash).to.include('Your username is invalid!');
    });

    it('should allow access with correct credentials', () => {
        LoginPage.open;
        LoginPage.loginWithCredentials('tomsmith', 'SuperSecretPassword!');

        expect(LoginPage.flash).to.include('You logged into a secure area!');
    });
});
