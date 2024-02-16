const mongoose = require('mongoose');

const connection = async () => {
    await mongoose.connect(`mongodb+srv://killecarter1473:fdZSb9vs8YeOtm7J@drogaraia-api.5svtpit.mongodb.net/?retryWrites=true&w=majority`)
}

connection().catch(err => console.log(err));

module.exports = connection;