const { Loja: LojaModel, Loja } = require('../models/lojaModel');

const lojaController = {

    create: async (req, res) => {
        try {

            const loja = {
                name: req.body.name,
                filialNumber: req.body.filialNumber,
                address: req.body.address,
                phone: req.body.phone,
                celphone: req.body.celphone,
                farmapop: req.body.farmapop
            }

            console.log(loja)

            if ((loja.name == null || loja.filialNumber == null || loja.address == null || loja.farmapop == null)) {
                res.status(400).json({ msg: "Loja está incompleta pra cadastrar!" });
                return;
            }

            const lojaExistente = await LojaModel.findOne({ filialNumber: loja.filialNumber })

            if (lojaExistente) {
                res.status(400).json({ msg: "Já existe uma loja com esse número de Filial!" });
                return;
            }

            const response = await LojaModel.create(loja);

            res.status(201).json({ response, msg: "Loja criada com sucesso!" })

        } catch (err) {
            console.log(err)
        }
    },

    getAll: async (req, res) => {
        try {

            const lojas = await LojaModel.find();

            res.json(lojas)

        } catch (err) {
            console.log(err)
        }
    },

    get: async (req, res) => {
        try {

            const id = req.params.id;

            const loja = await LojaModel.findById(id);

            if (!loja) {
                res.status(404).json({ msg: 'Loja não encontrada!' });
                return;
            }

            res.status(200).json(loja)

        } catch (err) {
            console.log(err)
        }
    },

    delete: async (req, res) => {
        try {

            const id = req.params.id;

            const loja = await LojaModel.findById(id);

            if (!loja) {
                res.status(404).json({ msg: 'Loja não encontrada!' });
                return;
            }

            const lojaDeletada = await LojaModel.findByIdAndDelete(id);

            res.status(200).json({ lojaDeletada, msg: 'Loja deletada com sucesso!' })

        } catch (err) {
            console.log(err)
        }
    },

    update: async (req, res) => {
        try {

            const id = req.params.id;

            const loja = {
                name: req.body.name,
                filialNumber: req.body.filialNumber,
                address: req.body.address,
                phone: req.body.phone,
                celphone: req.body.celphone,
                farmapop: req.body.farmapop
            }

            if (loja.filialNumber) {
                const lojaExistente = await LojaModel.findOne({ filialNumber: loja.filialNumber });
                if (lojaExistente) {
                    res.status(400).json({ msg: 'Já existe uma loja com esse número de filial!' });
                    return;
                }
            }

            const lojaAtualizada = await LojaModel.findByIdAndUpdate(id, loja);

            if (!lojaAtualizada) {
                res.status(404).json({ msg: 'Loja não encontrada!' });
                return;
            }

            res.status(200).json({ loja, msg: 'Loja atualizada com sucesso!' })

        } catch (err) {
            console.log(err)
        }
    }

};

module.exports = lojaController;