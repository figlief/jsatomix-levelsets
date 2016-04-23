var test = require('tape')
var levelsets = require('../')
test('litmus', function (t) {
  t.plan(1)
  t.equal(
    levelsets['katomic'].name,
    'katomic'
  )
})
