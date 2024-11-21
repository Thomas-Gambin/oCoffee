import express from 'express';
import homeController from './controllers/homeController.js';
import productsController from './controllers/productsController.js';
import aboutController from './controllers/aboutController.js';
import contactController from './controllers/contactController.js';

const router = express.Router();

router.get('/', homeController.homePage);

router.get('/produits', (req, res) => {
    const { category } = req.query;
    if (category) {
        res.redirect(`/produits/${category}`);
    } else {
        productsController.productsPage(req, res);
    }
});
router.get('/produits/:category', productsController.productsCategoryPage);
router.get('/produit/:id', productsController.productDetailPage);
router.get('/a-propos', aboutController.aboutPage);
router.get('/contact', contactController.contactPage);

export default router;
