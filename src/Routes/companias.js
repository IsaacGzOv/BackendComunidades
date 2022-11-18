const express = require('express');
const Companias = require('../controllers/companias');
const router = express.Router();

router.get('/get-companias', Companias.getCompanias);
router.get('/get-compania/:idCompania', Companias.getCompania);
router.post('/create-compania', Companias.createCompania);


module.exports = router;