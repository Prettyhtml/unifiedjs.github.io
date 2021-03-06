'use strict'

var trough = require('trough')
var cssnano = require('cssnano')

module.exports = trough().use(transform)

function transform(file) {
  return cssnano
    .process(file.toString('utf8'), {from: file.path})
    .then(function(result) {
      file.contents = result.css
    })
}
