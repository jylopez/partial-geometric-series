var geometricSeries = require('../')

var test = require('tape')

test('multiples of 3 or 5 under 10', function (t) {
  t.plan(1)
  console.log('Partial Sum: ', geometricSeries(0.289, 20))
  console.log('Infinite Sum: ', 1/(1-0.289))
  t.same(geometricSeries(0.289, 20).toString().substring(0, 4), (1/(1-0.289)).toString().substring(0,4))
})