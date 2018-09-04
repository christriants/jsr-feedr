// // var crypto = 'crypto';
// // require([crypto], function(result){
// //   crypto = result;
// // });

// // require([crypto], result => crypto = result);

// const crypto = require('crypto');

// const API_SECRET = "HTuRddLgDjCZcnJdo0kvpYY9HOX9RCFA";
// const clientId = 8143;
// var timestamp = (new Date).getTime();

// function generateToken(scope, timestamp) {
//     var hmac = crypto.createHmac("md5", API_SECRET);
//     var tokenString = API_SECRET + ":" + scope + ":" + timestamp
//     hmac.update(tokenString);
//     var crypted = hmac.digest("hex");

//     return crypted;
// };

// var apiToken = generateToken('readonly', timestamp);

// // console.log(apiToken)

// module.exports = {
//      clientId: clientId,
//      timestamp: timestamp,
//      apiToken: apiToken,
//      API_SECRET: API_SECRET
// };
