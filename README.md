# WebdriverIO_v5_TypeScript

This is a boilerplate project that uses version 5 of WebdriverIO and TypeScript. This project is useful not only as an example of WebdriverIO v5 and TypeScript playing nicely together, but it includes examples of the PageObject pattern and some practical examples of how to use WebdriverIO to build an automated test suite using mocha & chai.

## Getting Started
```
git clone git@github.com:jpolley/WebdriverIO_v5_TypeScript.git
cd WebdriverIO_v5_TypeScript
npm install
npm test
```

## Page Objects

[Page Objects](https://martinfowler.com/bliki/PageObject.html) are a really nifty abstraction for the UI elements that you interact with in your tests. You can create simple getter functions for each element that you need to access. And optionally you can create convenience methods like `loginWithCredentials()` that allow you to create more concise tests. 

##### `src/pages/LoginPage.ts`

```typescript
import BasePage from 'src/pages/BasePage';

class LoginPage extends BasePage {

    get username() {
        return $('#username');
    }

    get password() {
        return $('#password');
    }

    get submit() {
        return $('#login > button');
    }

    loginWithCredentials(username, password) {
        this.username.setValue(username);
        this.password.setValue(password);
        this.submit.click()
    }
}

export default new LoginPage();
```

##### `test/login.spec.ts`


```typescript
import {expect} from 'chai';
import LoginPage from 'src/pages/LogInPage';

describe('Login page', () => {
    it('should allow access with correct credentials', () => {
        LoginPage.open;
        LoginPage.loginWithCredentials('tomsmith', 'SuperSecretPassword!');
        expect(LoginPage.flash).to.include('You logged into a secure area!');
    });
});
```


## Acknowledgements
[Christian Bromann](https://github.com/christian-bromann) for his work on WebdriverIO.

[Dave Haeffner](https://github.com/tourdedave) for his work on [the-internet](http://the-internet.herokuapp.com) which I use in my examples.

[Kevin Lamping](https://github.com/klamping) for creating a neat [course](https://learn.webdriver.io/) on WebdriverIO that helped me learn it more quickly. 
 
[Will Luce](https://github.com/WillLuce) created [an example project](https://github.com/WillLuce/WebdriverIO_Typescript) using version 4 of WebdriverIO & TypeScript that was helpful to me and I used it as a template for this one.

[Wildbit](https://wildbit.com/) for being a super rad place to work and giving me two weeks to work on whatever I wanted, which ultimately led to this project.
