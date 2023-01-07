const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 8081;
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || '';
const GOOGLE_SECRET = process.env.GOOGLE_SECRET || '';
const REFRESH_TOKEN = process.env.REFRESH_TOKEN || '';
const USER_EMAIL = process.env.USER_EMAIL || '';

module.exports = {
    PORT, GOOGLE_CLIENT_ID, GOOGLE_SECRET, REFRESH_TOKEN, USER_EMAIL
}
