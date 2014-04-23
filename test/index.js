var check = require('../')
var assert = require('assert')

describe('something', function() {
  before(function() {
    this.something = {
      name: 'Brian',
      height: 6.4,
      birthday: new Date(1982, 6, 23)
    }
    this.somethingElse = {
      name: 'Santa'
    }
  })

  check('something', {
    name: 'Brian',
    height: 6.4,
    birthday: function(actual) {
      assert.equal(actual.getFullYear(), 1982)
    }
  })

  check('somethingElse', {
    name: 'Santa'
  })
})
