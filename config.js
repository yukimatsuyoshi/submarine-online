// localhostで実行する際にはこっち
// module.exports = {
//     twitter: {
//       consumerKey: 'dbrDQMLDxKB3HtKUQBfCLOxY0',
//       consumerSecret: 'RO1PZG6Qbi7QJaY8OMeqhP3HRi91BoDTvGyBByCjtReGr24Y7J',
//       callbackURL: 'http://localhost:8000/oauth_callback'
//     },
//     ipAddress: 'http://localhost:8000'
// };

module.exports = {
  twitter: {
    consumerKey: 'dbrDQMLDxKB3HtKUQBfCLOxY0',
    consumerSecret: 'RO1PZG6Qbi7QJaY8OMeqhP3HRi91BoDTvGyBByCjtReGr24Y7J',
    callbackURL: 'https://intense-harbor-94892.herokuapp.com/oauth_callback'
  },
  ipAddress: 'https://intense-harbor-94892.herokuapp.com/'
};