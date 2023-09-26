const mongoose = require('mongoose');
const { MONGO_URI } = require('./config');

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error(`MongoDB Connection Error: ${err}`));

module.exports = mongoose;