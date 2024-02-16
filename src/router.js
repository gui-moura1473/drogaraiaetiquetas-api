const express = require('express');
const servicoController = require('./controllers/servicoController');
const router = express.Router();

router.get('/', (req, res) => res.status(200).send('O router tá funcionando!'));

router
    .route('/servicos')
    .post((req, res) => servicoController.create(req, res));

router
    .route('/servicos')
    .get((req, res) => servicoController.getAll(req, res));

router
    .route('/servicos/:id')
    .get((req, res) => servicoController.get(req, res));

router
    .route('/servicos/:id')
    .delete((req, res) => servicoController.delete(req, res));

router
    .route('/servicos/:id')
    .put((req, res) => servicoController.update(req, res));

module.exports = router;