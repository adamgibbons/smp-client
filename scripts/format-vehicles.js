var fs = require('fs')
var _ = require('lodash')
var data = require('../src/components/vehicles/raw-data.json')

var vehicles = _.uniq(data.map(function (i) {
  return i.make
})).sort()

var result = vehicles.reduce(function (accumulator, current, index, array) {
  accumulator[current] = data.filter(function (vehicle) {
    return vehicle.make === current
  }).map(function (vehicle) {
    return vehicle.model
  })

  return accumulator
}, {})

// console.log(result)

fs.writeFileSync('vehicles.txt', JSON.stringify(result, null, 2))
