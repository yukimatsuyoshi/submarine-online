module.exports = {
    twitter: {
      consumerKey: process.env.TWITTER_CONSUMER_KEY || 'dbrDQMLDxKB3HtKUQBfCLOxY0',
      consumerSecret: process.env.TWITTER_CONSUMER_SECLET || 'RO1PZG6Qbi7QJaY8OMeqhP3HRi91BoDTvGyBByCjtReGr24Y7J',
      callbackURL: process.env.HEROKU_URL ? process.env.HEROKU_URL + '/oauth_callback' : 'http://localhost:8000/oauth_callback'
    },
    ipAddress: process.env.HEROKU_URL || 'http://localhost:8000'
};