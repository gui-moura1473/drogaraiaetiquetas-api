const mongoose = require('mongoose');
require('dotenv').config();

const DATABASE_PASSWORD = encodeURIComponent(process.env.MONGODB_PASSWORD);

const connection = async () => {
    await mongoose.connect(`mongodb+srv://killecarter1473:${DATABASE_PASSWORD}@drogaraia-api.5svtpit.mongodb.net/?retryWrites=true&w=majority`)
}

connection().catch(err => console.log(err));

module.exports = connection;