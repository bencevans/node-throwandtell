# node-throwandtell

ThowAndTell(.com) Node.js Error Reporting Client.

## Install

`npm install throwandtell`

## Usage

```javascript
var ThrowAndTell = require('throwandtell');
var options = {

  // Key Given in ThrowAndTell(.com) Dashboard
  accessKey: process.env.THROWANDTELL_ACCESSKEY || 'PLACE_KEY_HERE'

  // By default ThrowAndTell adds a listner for uncaught Errors
  // to disable this, use:
  //
  // autoHookUncaught: false
  //
  
  // If you would like to use a host other than 'throwandtell.com' then follow:
  //
  // server: {
  //   host: 'YOUR_HOST',
  //   port: 80
  // }

}
var throwandtell = new ThrowAndTell(options);
```

You can **automaticly report** uncaught errors  when `options.autoHookUncaught === true`. Here's one:

```javascript
throw new Error("Test Error");
```

You can **manually report** errors with:

```javascript
throwandtell.report(err);

// Or with a callback (errWhenReporting)

throwandtell.report(err, function() {
  if(reportErr) SCCCRRREEEEAAAAAM(); // With SCCCRRREEEEAAAAAM being a valid function of course!
});
```
##Licence

(The MIT Licence)

Copyright (c) 2012 Ben Evans <ben@bensbit.co.uk>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.