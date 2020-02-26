
import { expect } from "chai";
import {countingValleys} from "./counting_valleys";

describe('countingValleys()', () => {
    it('returns negative numbers in reverse order', () => {
        const arrStrInput = ["U", "D", "D", "D", "U", "D", "U", "U"];
        const intInput = arrStrInput.length;

        const expected = 1;
        const actual = countingValleys(intInput, arrStrInput);
        expect(actual).to.deep.equal(expected);
    });

    // it('returns the numbers with ending zeros in reverse order', () => {
    //     const expected = 21;
    //     const actual = reverse(120);
    //     expect(actual).to.deep.equal(expected);
    // });
});