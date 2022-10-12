require('dotenv').config()

const config = {
  port: process.env.PORT,
  nodeEnv: process.env.NODE_ENV,
  db: {
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    name: process.env.DB_NAME
  }
}

module.exports = config;