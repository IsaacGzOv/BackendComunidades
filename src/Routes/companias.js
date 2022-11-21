const express = require('express');
const Companias = require('../controllers/companias');
const router = express.Router();

router.get('/get-companias', Companias.getCompanias);
router.get('/get-compania/:idCompania', Companias.getCompania);
router.post('/create-compania', Companias.createCompania);
router.delete('/delete-compania/:idCompania', Companias.deleteCompania);
router.put('/update-compania/:idCompania', Companias.updateCompania);

module.exports = router;