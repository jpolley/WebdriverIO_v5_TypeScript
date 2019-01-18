import {expect} from 'chai';
import KeyPressPage from 'src/pages/KeyPressPage';

describe('Key Presses', () => {
    it('can be performed using .keys()', () => {
        const keyValue = 'Enter';

        KeyPressPage.open;
        KeyPressPage.submitKeyPress(keyValue);

        expect(KeyPressPage.result).to.eq(`You entered: ${keyValue.toUpperCase()}`);
    });
});
