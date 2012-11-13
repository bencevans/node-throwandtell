
// If Installed from NPM include module with the following
//
// var ThrowAndTell = require('throwandtell');
//
// Here we require it from a local file.

var ThrowAndTell = require('../');
var throwandtell = new ThrowAndTell({

  // Key Given in Dashboard
  accessKey: process.env.THROWANDTELL_ACCESSKEY || 'PLACE_KEY_HERE'

  // By default ThrowAndTell adds a listner for uncaught Errors
  // to disable this place
  //
  // autoHookUncaught: false
  //

  // Another default is to NOT 'save' the app from crashing due
  // to an uncaughtError, hoever it can, if you uncomment the following
  //
  // saveUncaught: true
  //

});


throw new Error("Test Error");

// It's then reported to GitHub or wherevers been set in the dashboard
// and this app would exit.