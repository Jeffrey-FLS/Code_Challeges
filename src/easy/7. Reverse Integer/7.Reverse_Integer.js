
/**
 * @param {number} x
 * @return {number}
 */

const reverse = (x) => {
    // const arrStrNum = x.toString().split('').reverse().join('') * Math.sign(x);
    const reversed = parseInt(x.toString().split('').reverse().join('')) * Math.sign(x);

    // return (x < 0)
    //     ? parseInt(arrStrNum) * Math.sign(x)
    //     : parseInt(arrStrNum);

    return (reversed <= 0x7fffffff && reversed >= -0x80000000) ? reversed : 0;
};


export default reverse;
