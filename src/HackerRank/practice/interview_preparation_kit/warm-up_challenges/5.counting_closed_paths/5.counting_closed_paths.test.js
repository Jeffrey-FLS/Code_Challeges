
import { expect } from "chai";
import {closedPaths} from "./5.counting_closed_paths";

describe('closedPaths()', () => {

    it('returns the number of closed paths', () => {
        const expected = 5;
        const actual = closedPaths(649578);
        expect(actual).to.deep.equal(expected);
    });
});