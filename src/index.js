module.exports = function reverse (n) {

  if (n<0) {
    n *= -1
  }
  str = n + ""
  result = ""
  for (let i = 0; i < str.length; i++) {
    result = str.charAt(i) + result;
  }
  return result;
}
