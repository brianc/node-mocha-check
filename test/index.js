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

describe('arrays', function() {
  before(function() {
    this.something = [{
      name: 'brian'
    }, {
      name: 'aaron'
    }]
  })

  check('something', 0, {
    name: 'brian',
    name: function(val) {
      console.log('hit')
      console.log('hit')
      console.log('hit')
      console.log('hit')
    }
  })

  check('something', 1, {
    name: 'aaron'
  })
})

describe('nested objects', function() {
  before(function() {
    this.something = {
      person: {
        name: 'Brian'
      },
      friends: [{
        name: 'Aaron'
      }, {
        name: 'Shelley'
      }]
    }
  })

  check('something.person', {
    name: 'Brian'
  })

  check('something', {
    'person.name': 'Brian',
    'friends.0.name': 'Aaron'
  })
})
