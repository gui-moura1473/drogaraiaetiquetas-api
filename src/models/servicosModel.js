const mongoose = require('mongoose');

const { Schema } = mongoose;

const servicoSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    ean: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
}, { timestamps: true });

const Servico = mongoose.model("Serviço", servicoSchema);

module.exports = {
    Servico
};