/**
 * Created by antoine on 10/07/16.
 */
var defaultEnv = require('../env/default');
var path = require('path');


var serverConfig = {
  name: 'mean',
  server: {
    domain: defaultEnv.host,
    port: defaultEnv.port,
    timeout: 30000
  },
  render: {
    strategy: 'all',
    rules: []
  },
  cache: {
    type: 'none',
    fileDir: path.resolve(__dirname + '/../../cache'),
    cacheMaxAge: [{
      regex: /.*/,
      maxAge: 10
    }],
    cacheAlways: [],
    cacheNever: [],
    cacheTimestamp: []
  }
};

module.exports = serverConfig;
