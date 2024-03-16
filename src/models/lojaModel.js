const mongoose = require('mongoose');

const { Schema } = mongoose;

const lojaSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    filialNumber: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: false
    },
    celphone: {
        type: String,
        required: false
    },
    farmapop: {
        type: Boolean,
        required: true
    },

}, { timestamps: true })

const Loja = mongoose.model("Loja", lojaSchema);

module.exports = {
    Loja
};