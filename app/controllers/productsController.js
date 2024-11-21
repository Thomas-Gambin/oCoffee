import coffeeDataMapper from "../dataMapper/coffee.js";

const productsController = {
    async productsPage(req, res) {
        try {
            const coffees3 = await coffeeDataMapper.getTop3Coffees();
            const allCoffees = await coffeeDataMapper.getAllCoffees();
            const allCategories = await coffeeDataMapper.getAllCategories();
            const cafeCategory = await coffeeDataMapper.getAllCoffeesByCategory();
            res.render('produits', { coffees3, allCoffees, allCategories, cafeCategory });
        } catch (err) {
            console.error(err);
            res.status(500).send('Erreur lors de la récupération des cafés');
        }
    },

    async productsCategoryPage(req, res) {
        try {
            const allCategories = await coffeeDataMapper.getAllCategories();
            const category = req.params.category;
            const coffeeCategory = await coffeeDataMapper.getAllCoffeesByCategory(category);
            res.render('categorieProduits', { allCategories, coffeeCategory });
        } catch (err) {
            console.error(err);
            res.status(500).send('Erreur lors de la récupération des cafés');
        }
    },

    async productDetailPage(req, res) {
        try {
            const id = req.params.id;
            const coffee = await coffeeDataMapper.getCoffeeById(id);
            res.render('detail', { coffee });
        } catch (err) {
            console.error(err);
            res.status(500).send('Erreur lors de la récupération du café');
        }
    }
}

export default productsController;