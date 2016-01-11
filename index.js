module.exports = function (max) {
  max = Math.floor(max)
  if (max <= 0) {
    return 0
  }
  var primes = []
  var flags = []
  var n = max
  var m = (max) / 2
  while (n--) {
    flags[max - n] = true
  }
  for (var i = 1; i < m; i++) {
    for (var j = i; j < m; j++) {
      flags[i + j + (2 * i * j)] = false
    }
  }
  // Pushing 1 & 2 is necessary since primes are calculated from 3
  primes.push(1)
  if (max > 1) {
    primes.push(2)
  }
  for (var k = 1; k < m; k++) {
    if (flags[k]) {
      primes.push(k + k + 1)
    }
  }
  return primes
}
