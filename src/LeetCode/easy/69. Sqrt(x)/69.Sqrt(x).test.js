
import { expect } from "chai";
import mySqrt from "./69.Sqrt(x)";

describe('mySqrt()', () => {
    it('returns the square root of a number', () => {
        const expected = 2;
        const actual = mySqrt(4);
        expect(actual).to.deep.equal(expected);
    });

    it('returns the square root of a number without decimal values', () => {
        const expected = 2;
        const actual = mySqrt(8);
        expect(actual).to.deep.equal(expected);
    });
});