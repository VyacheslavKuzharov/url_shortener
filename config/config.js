var config = {};

config.db = {};
config.web = {};



config.web.host = process.env.HOST || 'http://localhost:3000/';
config.web.port = process.env.PORT || 3000;

config.db.host = 'localhost';
config.db.name = 'url_shortener';
config.db.url = process.env.MONGODB_URI || 'mongodb://' + config.db.host + '/' + config.db.name;

module.exports = config;