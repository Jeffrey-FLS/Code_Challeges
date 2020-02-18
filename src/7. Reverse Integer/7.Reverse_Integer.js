
/**
 * @param {number} x
 * @return {number}
 */

const reverse = (x) => {
    const arrStrNum = x.toString().split('').reverse().join('');

    return (x < 0)
        ? parseInt(arrStrNum) * Math.sign(x)
        : parseInt(arrStrNum);
};


export default reverse;
