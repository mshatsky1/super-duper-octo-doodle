module.exports = {
  appName: 'Super Duper Octo Doodle',
  version: '1.0.0',
  environment: process.env.NODE_ENV || 'development',
  debug: process.env.DEBUG === 'true' || false,
  port: process.env.PORT || 3000,
  apiVersion: 'v1'
};
