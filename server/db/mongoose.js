var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var myURI = process.env.MONGODB_URI;
  console.log('URI is:', myURI);
const options = {
  autoIndex: true, // build indexes
  useMongoClient: true
};
mongoose.connect(myURI,options);
module.exports = {mongoose};
