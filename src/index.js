module.exports = function reverse(n) {
    n = n.toString().replace("-", "").split("").reverse();
    return n.join('');
}

