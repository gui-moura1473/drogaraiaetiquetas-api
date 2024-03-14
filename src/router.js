const express = require('express');
const servicoController = require('./controllers/servicoController');
const lojaController = require('./controllers/lojaController');
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



router
    .route('/lojas')
    .post((req, res) => lojaController.create(req, res));

router
    .route('/lojas')
    .get((req, res) => lojaController.getAll(req, res));


router
    .route('/lojas/:id')
    .get((req, res) => lojaController.get(req, res));

router
    .route('/lojas/:id')
    .delete((req, res) => lojaController.delete(req, res));

router
    .route('/lojas/:id')
    .put((req, res) => lojaController.update(req, res));

module.exports = router;