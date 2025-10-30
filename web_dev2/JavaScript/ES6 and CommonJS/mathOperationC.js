// named export

function add(a,b) {
    return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiple(a, b) {
  return a * b;
}

module.exports = {
    add,
    substract,
    multiple,
};