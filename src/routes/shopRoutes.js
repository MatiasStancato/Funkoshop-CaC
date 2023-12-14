const express = require ("express");
const router = express.Router();
const shopController = require ("../controllers/shopController")


router.get('/',shopController.ShopView)
router.get('/item/:id',shopController.itemId)
// router.post('/item/:id/add',shopController.itemAdd)
router.get('/cart',shopController.shopCart)
// router.post('/cart',shopController.shopCheckout)




module.exports = router;
