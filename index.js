var assert = require('assert')
var path = require('object-path')

function functionName(fun) {
  var ret = fun.toString();
  ret = ret.substr('function '.length);
  ret = ret.substr(0, ret.indexOf('('));
  return ret;
}

module.exports = function(subjectName, expected) {
  var makeTest = function(name, value) {

    var getActual = function() {
      var subject = path.get(this, subjectName + '.' + name)
      if(typeof subject == 'undefined') {
        assert.fail('Cannot find topic ' + subjectName)
      }
      return subject
    }

    if(typeof value == 'function') {
      var fnName = functionName(value) || 'test function'
      return it(name + ' satisfies ' + fnName, function() {
        value(getActual.call(this))
      })
    }

    it('has ' + name + ' == ' + value, function() {
      assert.equal(getActual.call(this), value)
    })
  }

  for(var key in expected) {
    makeTest(key, expected[key])
  }
}
