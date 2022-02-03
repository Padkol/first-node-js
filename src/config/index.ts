require('dotenv').config({ path: __dirname + '/../../.env' });

const env = process.env.NODE_ENV ? process.env.NODE_ENV.toLowerCase() : 'local';

export const config = {
    dialect: 'mongodb+srv://',
    host: process.env.DATABASE_HOST,
    password: process.env.DATABASE_PASSWORD,
    username: process.env.DATABASE_USERNAME,
    database: process.env.DATABASE_NAME,
    mongoUrl: `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_NAME}`,
    env,
    workingPort: process.env.PORT || 3000,
    apiUrl:
        env === 'local'
            ? `http://localhost:${process.env.PORT || 3000}`
            : 'deployed',
    sessionSecretKey: process.env.SESSION_SECRET_KEY || 'keyboard cats here',
};

