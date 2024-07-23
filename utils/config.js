
require('dotenv').config();


const MONGODB_URI = process.env.MONGODB_URI;
const RESET_URL  = process.env.RESET_URL;
const EMAIL_ID  = process.env.EMAIL_ID;
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD ;

module.exports = {
    MONGODB_URI,
    RESET_URL,
    EMAIL_ID,
    EMAIL_PASSWORD 
   
};

