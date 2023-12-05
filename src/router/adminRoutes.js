const express = require ('express');
const router = express.Router();
const adminController = require ("../controllers/adminController")


router.get('/',adminController.home)
router.get('/create',adminController.create)
router.post('/create',adminController.create)
router.get('/edit/:id',adminController.edit)
router.put('/edit/:id',adminController.edit)
router.post('/delete/:id',adminController.delete)


module.exports = router;