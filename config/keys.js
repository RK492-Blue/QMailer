// keys.js - figure out what set of credentials to return
// if(process.env.NODE_ENV === 'production'){
//     // production environment - return prod keys
//     module.exports = require('./prod');
// } else {
//     // dev environment - return dev keys
//     module.exports = require('./dev');
// }

module.exports = {
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    mongoURI: process.env.MONGO_URI,
    cookieKey: process.env.COOKIE_KEY
};