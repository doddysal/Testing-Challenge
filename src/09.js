function symmetrical(str) {
  return str === str.split('').reverse().join('');
}
;
module.exports = symmetrical;