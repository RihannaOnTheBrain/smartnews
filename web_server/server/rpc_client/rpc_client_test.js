var client = require('./rpc_client');

// invoke 'add'
client.add(1, 2, function(response) {
  // assert test
  console.assert(response == 3);
});
