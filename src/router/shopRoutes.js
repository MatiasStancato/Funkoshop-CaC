const express = require ("express");
const router = express.Router();
const shopController = require ("../controllers/shopController")


router.get('/',shopController.home)
router.get('/item/:id',shopController.shopId)
router.post('/item/:id/add',shopController.shopAdd)
router.get('/cart',shopController.shopCart)
router.post('/cart',shopController.shopCheckout)




module.exports = router;
