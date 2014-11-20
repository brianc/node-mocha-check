# mocha-check

Generate a mocha test case for each property you're checking

## install

```sh
$ npm install mocha-check
```

## use

The following test suite will have 1 test for each property check.

```js

var assert = require('assert')
var check = require('mocha-check')

describe('some test', function() {
  before(function() {
    this.user = {
      name: 'Brian',
      age: 32,
      siblings: [{
        name: 'Aaron'
      }, {
        name: 'Shelley'
      }]
    }
  })

  check('user', {
    name: 'Brian',
    age: function(actual) {
      assert(actual > 30, 'Should be older than 30')
    },
    'siblings.0.name': 'Aaron',
    'siblings.1.name': 'Shelley'
  })
})

```

## LICENSE

The MIT License (MIT)

Copyright (c) 2014 Brian M. Carlson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
