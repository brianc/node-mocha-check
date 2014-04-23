var assert = require('assert')

function functionName(fun) {
  var ret = fun.toString();
  ret = ret.substr('function '.length);
  ret = ret.substr(0, ret.indexOf('('));
  return ret;
}

module.exports = function(subjectName, expected) {
  var makeTest = function(name, value) {
    if(typeof value == 'function') {
      var fnName = functionName(value) || 'test function'
      return it(name + ' satisfies ' + fnName, function() {
        value(this[subjectName][name])
      })
    }
    it('has ' + name + ' == ' + value, function() {
      assert.equal(this[subjectName][name], value)
    })
  }
  for(var key in expected) {
    makeTest(key, expected[key])
  }
}
