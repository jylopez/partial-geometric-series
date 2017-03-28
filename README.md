# partial-geometric-series [![npm version](https://img.shields.io/badge/npm-v1.0.0-blue.svg)](https://www.npmjs.com/package/partial-geometric-series)

> Returns the partial sum of the geometric sequence. i.e. 1 + r + r^2 + r^3 + ... + r^n

### Install
```
npm install partial-geometric-series
```

### Usage

``` js
/*
Return the partial sum of a geomt
*/

var p = require('partial-geometric-series');
var ratio = 0.3 // Must be <1 for convergence
var nth = 5 // nth partial sum

console.log( 'Partial Sum:', p(ratio, nth) ) // Partial Sum: 1.42753
console.log( 'Infinite Sum:', 1/(1-0.3)) // Infinite Sum: 1.4285714285714286
```

### API

#### partial-geometric-series(ratio, nth partial sum)

### License
MIT
