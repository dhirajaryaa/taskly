
const app = Object.freeze({
    NODE_ENV: process.env.NODE_ENV,
    DB_URI: process.env.DB_URI,
    PORT: process.env.PORT,
    ORIGIN : process.env.ORIGIN
});

export const {
    NODE_ENV,
    DB_URI,
    PORT,
    ORIGIN
} = app