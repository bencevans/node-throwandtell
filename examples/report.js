
var ThrowAndTell = require('../');
var throwandtell = new ThrowAndTell({

  // Key Given in Dashboard
  accessKey: 'PLACE_KEY_HERE',

  // Don't Catch Uncaught Errors e.g throw new Error("...") without try ... catch(e)
  autoHookUncaught: false
});

function giveMeAnError(callback) {
  callback(new Error("Here you go Sir, Have an Error."));
}


giveMeAnError(function(err) {
  if(err) throwandtell.report(err);
});