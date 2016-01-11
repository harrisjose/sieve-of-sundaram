# Sieve of Sundaram

[Sieve of Sundaram](https://en.wikipedia.org/wiki/Sieve_of_Sundaram) implemented in JavaScript

![Algorithm](https://upload.wikimedia.org/wikipedia/commons/e/e0/Sieve_of_Sundaram_Animated.gif)

Any contributions to make this better are welcome :)

# Install
```bash
npm install sieve-of-sundaram
```

# Usage

Note : For all practical purposes, you should be using the [Sieve of Eratosthenes](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes) which is available as a module [here](https://www.npmjs.com/package/sieve-of-eratosthenes)
```JavaScript
var sieve-of-sundaram = require('sieve-of-sundaram')
var primes = sieve-of-sundaram(100)
console.log(primes)
//
[ 1,
  2,
  3,
  5,
  7,
  11,
  13,
  17,
  19,
  23,
  29,
  31,
  37,
  41,
  43,
  47,
  53,
  59,
  61,
  67,
  71,
  73,
  79,
  83,
  89,
  97 ]
```
