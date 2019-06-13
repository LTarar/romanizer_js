let test = require('tape')
let romanizer = require('./romanizer.js')

test('Tape is working', function(t) {
  t.equal(1,1, 'One should equal one')
  t.end()
})

test('Romanizer output', function(t) {
  let actual = romanizer(1)
  let output = 'I'
  t.equal(actual,output, '1 to output I')
  t.end()
})

test('Romanizer output', function(t) {
  let actual = romanizer(2)
  let output = 'II'
  t.equal(actual,output, '2 to output II')
  t.end()
})

test('Romanizer output', function(t) {
  let actual = romanizer(3)
  let output = 'III'
  t.equal(actual,output, '3 to output III')
  t.end()
})

test('Romanizer output', function(t) {
  let actual = romanizer(4)
  let output = 'IV'
  t.equal(actual,output, '4 to output IV')
  t.end()
})
