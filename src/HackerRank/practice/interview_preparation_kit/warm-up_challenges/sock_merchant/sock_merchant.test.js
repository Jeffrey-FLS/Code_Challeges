
import { expect } from "chai";
import {sockMerchant} from "./sock_merchant";

describe('sockMerchant()', () => {
   it('returns the numbers in reverse order', () => {

        const coloredSocks = [10, 20, 20, 10, 10, 30, 50, 10, 20];
        const numOfSocks = coloredSocks.length;

        const expected = 3;

        const actual = sockMerchant(numOfSocks, coloredSocks);
        expect(actual).to.deep.equal(expected);
   });
});