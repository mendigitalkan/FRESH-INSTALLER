'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.CONFIG = void 0
const dotenv_1 = __importDefault(require('dotenv'))
dotenv_1.default.config()
exports.CONFIG = {
  appVersion: process.env.APP_VERSION,
  appSemantic: process.env.APP_SEMANTIC,
  appMode: process.env.APP_MODE ?? 'development',
  appUrl: 'https://jasaapk.us/fresh/api/v1',
  env: process.env.APP_ENV,
  port: 8008,
  log: 'true',
  ipBlackList: [],
  secret: {
    keyEncryption: 'qwerty',
    passwordEncryption: 'qwerty',
    pinEncryption: 'qwerty',
    token: 'qwerty'
  },
  twilio: {
    accountSID: process.env.TWILIO_ACCOUNT_SID,
    authToken: process.env.TWILIO_AUTH_TOKEN,
    verifyService: process.env.TWILIO_VERIFY_SERVICE
  },
  maximumUploadFile: 1024,
  dataBase: {
    development: {
      username: 'root',
      password: 'v4l3nt1n3d4y14022024',
      database: 'fresh',
      host: 'localhost',
      dialect: 'mysql',
      logging: process.env.DB_LOG === 'true'
    },
    testing: {
      username: process.env.DB_USER_NAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      host: process.env.DB_HOST,
      dialect: process.env.DB_DIALECT,
      logging: process.env.DB_LOG === 'true'
    },
    production: {
      username: process.env.DB_USER_NAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      host: process.env.DB_HOST,
      dialect: process.env.DB_DIALECT,
      logging: process.env.DB_LOG === 'true'
    }
  }
}
