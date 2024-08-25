
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/inventoryDB');

module.exports = mongoose.connection;
