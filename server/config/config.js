const config = {
  production: {
    secret: process.env.secret,
    MONGO_URI: process.env.MONGO_URI,
    port: process.env.PORT,
  },
  development: {
    secret: 'DAMMESS_SECRET',
    MONGO_URI: 'mongodb://dbuser:password111@ds143262.mlab.com:43262/dammess',
    port: 4000,
  },
};

const getConfig = env => config[env] || config.development;

module.exports = { getConfig };