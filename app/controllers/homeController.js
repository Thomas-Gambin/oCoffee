import coffeeDataMapper from "../dataMapper/coffee.js";

const homeController = {

    async homePage(req, res) {
        try {
            const coffees = await coffeeDataMapper.getTop3Coffees();
            res.render('accueil', { coffees });
        } catch (err) {
            console.error(err);
            res.status(500).send('Erreur lors de la récupération des cafés');
        }
    },
};

export default homeController;