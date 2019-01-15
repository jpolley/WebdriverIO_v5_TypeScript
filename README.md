# WebdriverIO_v5_TypeScript

This is a boilerplate project that uses WebdriverIO v5 and TypeScript v3.2.2. This project is useful not only as an example of WebdriverIO v5 and TypeScript playing nicely together, but it includes examples of the PageObject pattern and some practical examples for using WebdriverIO to build an automated test suite with Mocha & Chai.

## Getting Started
```
git clone git@github.com:jpolley/WebdriverIO_v5_TypeScript.git
cd WebdriverIO_v5_TypeScript
npm install
npm test
```

## Why TypeScript
TypeScript offers the benefit of types, but you won't find them in this project. I have found TypeScript to be great because of the IDE intellisense and support for the latest JavaScript features. Version 5 of WebdriverIO has a type definition file included (you should no longer @types/webdriverio). This makes autocomplete work well in your IDE: 

![intellisense](https://github.com/jpolley/WebdriverIO_v5_TypeScript/blob/master/src/assets/intellisense.png)

You no longer need to explicitly compile your TypeScript to JavaScript using the command `tsc`. This project uses ts-node/register and tsconfig-paths as detailed on the [WebdriverIO TypeScript setup](https://webdriver.io/docs/typescript.html) page. 

## Page Objects

[Page Objects](https://martinfowler.com/bliki/PageObject.html) are a really nifty abstraction for the UI elements that you interact with in your tests. You can create simple getter functions for each element that you need to access. And optionally you can create convenience methods like `loginWithCredentials()` that allow you to write more concise tests. 

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
 
[Will Luce](https://github.com/WillLuce) for creating an [example project](https://github.com/WillLuce/WebdriverIO_Typescript) of WebdriverIO v4 & TypeScript that was helpful to me.

[Wildbit](https://wildbit.com/) for being a super rad place to work and giving me two weeks to work on whatever I wanted, which ultimately led to this project.
