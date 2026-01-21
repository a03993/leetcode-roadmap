/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    const stack = [];

    for (let token of tokens) {
        if (token === "+") {
            let a = stack.pop();
            let b = stack.pop();
            stack.push(+b);
        } else if (token === "-") {
            let a = stack.pop();
            let b = stack.pop();
            stack.push(b - a);
        } else if (token === "*") {
            let a = stack.pop();
            let b = stack.pop();
            stack.push(a * b);
        } else if (token === "/") {
            let a = stack.pop();
            let b = stack.pop();
            stack.push(Math.trunc(b / a));
        } else {
            stack.push(Number(token));
        }
    }

    return stack.pop();
};
