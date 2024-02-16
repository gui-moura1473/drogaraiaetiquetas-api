const app = require('./app');
require('dotenv').config();

app.listen(3000, () => {
    console.log(`Drogaraia API listening on port 3000`)
});