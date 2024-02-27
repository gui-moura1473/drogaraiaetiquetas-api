const { Servico: ServicoModel, Servico } = require('../models/servicosModel');

const servicoController = {

    create: async (req, res) => {
        try {

            const eanImgDataReq = await fetch(`https://api.invertexto.com/v1/barcode?token=6755%7C5bfEFKnHcGmWE4HvsJyZCcctwtDzPZql&text=${req.body.ean}&type=code128&font=0&base64=true`);
            const eanImgDataRes = await eanImgDataReq.json();

            console.log(eanImgDataRes)

            const servico = {
                name: req.body.name,
                ean: req.body.ean,
                price: req.body.price,
                eanDataImgStr: eanImgDataRes.image
            }

            if ((servico.name == null || servico.ean == null || servico.price == null || servico.eanDataImgStr == null)) {
                res.status(400).json({ msg: "Serviço está incompleto para cadastrar!" });
                return;
            }

            const response = await ServicoModel.create(servico);

            res.status(201).json({ response, msg: "Serviço criado com sucesso!" });

        } catch (err) {
            console.log(err)
        }
    },
    getAll: async (req, res) => {

        try {

            const servicos = await ServicoModel.find();

            res.json(servicos);

        } catch (err) {
            console.log(err)
        }

    },
    get: async (req, res) => {

        try {

            const id = req.params.id;

            const servico = await ServicoModel.findById(id);

            if (!servico) {
                res.status(404).json({ msg: 'Serviço não encontrado!' })
                return;
            };

            res.status(200).json(servico);

        } catch (err) {
            console.log(err);
        }

    },
    delete: async (req, res) => {

        try {

            const id = req.params.id;

            const servico = await ServicoModel.findById(id);

            if (!servico) {
                res.status(404).json({ msg: "Serviço não encontrado!" });
                return;
            }

            const servicoDeletado = await ServicoModel.findByIdAndDelete(id);

            res.status(200).json({ servicoDeletado, msg: 'Serviço deletado com sucesso!' })

        } catch (err) {
            console.log(err);
        }

    },
    update: async (req, res) => {

        try {

            const id = req.params.id;

            const servico = {
                name: req.body.name,
                ean: req.body.ean,
                price: req.body.price
            };

            const servicoAtualizado = await ServicoModel.findByIdAndUpdate(id, servico);

            if (!servicoAtualizado) {
                res.status(404).json({ msg: "Serviço não encontrado!" });
                return;
            }

            res.status(200).json({ servico, msg: "Serviço atualizado com sucesso!" });

        } catch (err) {
            console.log(err);
        }

    }
};

module.exports = servicoController;