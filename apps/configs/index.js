"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONFIG = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
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
        accountSID: 'ACc4e996f25a503516d0b85433d79e779d',
        authToken: 'eb46f61d0a12248daf2fec31386bd84b',
        verifyService: 'VA8beb7af5557b444ac8f14dddbedee8a3'
    },
    waBlasToken: process.env.WA_BLAS_TOKEN,
    waBlasBaseUrl: process.env.WA_BLAS_BASE_URL,
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
};
// export const CONFIG = {
//   appVersion: process.env.APP_VERSION,
//   appSemantic: process.env.APP_SEMANTIC,
//   appMode: process.env.APP_MODE ?? 'development',
//   appUrl: process.env.APP_URL,
//   env: process.env.APP_ENV,
//   port: process.env.APP_PORT ?? 8000,
//   log: process.env.APP_LOG === 'true',
//   ipBlackList: JSON.parse(process.env.IP_BLACK_LIST ?? '[]'),
//   secret: {
//     keyEncryption: process.env.SECRET_KEY_ENCRYPTION,
//     passwordEncryption: process.env.SECRET_PASSWORD_ENCRYPTION,
//     pinEncryption: process.env.SECRET_PIN_ENCRYPTION,
//     token: process.env.TOKEN_SECRET
//   },
//   maximumUploadFile: process.env.MAXIMUM_UPLOAD_FILE ?? 1024,
//   twilio: {
//     accountSID: process.env.TWILIO_ACCOUNT_SID,
//     authToken: process.env.TWILIO_AUTH_TOKEN,
//     verifyService: process.env.TWILIO_VERIFY_SERVICE
//   },
//   waBlasToken: process.env.WA_BLAS_TOKEN,
//   waBlasBaseUrl: process.env.WA_BLAS_BASE_URL,
//   dataBase: {
//     development: {
//       username: process.env.DB_USER_NAME,
//       password: process.env.DB_PASSWORD,
//       database: process.env.DB_NAME,
//       host: process.env.DB_HOST,
//       dialect: process.env.DB_DIALECT,
//       logging: process.env.DB_LOG === 'true'
//     },
//     testing: {
//       username: process.env.DB_USER_NAME,
//       password: process.env.DB_PASSWORD,
//       database: process.env.DB_NAME,
//       host: process.env.DB_HOST,
//       dialect: process.env.DB_DIALECT,
//       logging: process.env.DB_LOG === 'true'
//     },
//     production: {
//       username: process.env.DB_USER_NAME,
//       password: process.env.DB_PASSWORD,
//       database: process.env.DB_NAME,
//       host: process.env.DB_HOST,
//       dialect: process.env.DB_DIALECT,
//       logging: process.env.DB_LOG === 'true'
//     }
//   }
// }
