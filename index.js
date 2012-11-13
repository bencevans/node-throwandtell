
var request = require('request');

var defaultConfig = {
  server: {host:'throwandtell.com', port:80},
  saveUncaught: false,
  autoHookUncaught: true,
  accessKey: null,
  verbose: true
};

var ThrowAndTell = function(config) {
  // Validate Config
  this.config = defaultConfig;
  for(var i in config) this.config[i] = config[i];
  if(!this.config.accessKey) throw new Error("An accessKey must be provided when creating a ThrowAndTell Instance");

  // HookUncaught Abiding by Config
  if(this.config.autoHookUncaught)
    this.hookUncaught();

  return this;
};

ThrowAndTell.prototype.hookUncaught = function() {
  var self = this;
  process.on('uncaughtException', function(err) {
    if(self.config.verbose) console.log('Caught \'' + err.message + '\'');
    self.report(err, function(fail) {
      if(fail) return console.warn('ThrowAndTell: Unable to Report Error due to:', ok);
      if(self.config.verbose) console.log('\'' + err.message + '\' has been reported to ThrowAndTell');
    });
  });
};

ThrowAndTell.prototype.report = function(err, dataOrCb, cb) {
  if(typeof dataOrCb == "function") cb = dataOrCb;
  if(!err.stack) return cb(new Error("Given err does not give a stack"));
  request({
    uri: 'http://' + this.config.server.host + ':' + this.config.server.port + '/api/v1/report?access_key=' + this.config.accessKey,
    method: 'POST',
    json: {trace:err.stack},
    timeout: 10000
  }, function(err, res, body) {
    if(err) return cb(err);
    if(body.error) return cb(new Error(body.error));
    cb(null, true);
  });
};

module.exports = ThrowAndTell;