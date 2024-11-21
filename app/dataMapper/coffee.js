import client from '../database.js';

const coffeeDataMapper = {
    // Récupère tous les cafés
    async getAllCoffees() {
        try {
            const result = await client.query(`
        SELECT *
        FROM coffees
        ORDER BY id ASC;
        `);
            return result.rows;
        } catch (err) {
            console.error('Erreur lors de la récupération des cafés:', err);
        }
    },
    // Récupère les 3 premiers cafés
    async getTop3Coffees() {
        try {
            const result = await client.query(`
            SELECT * 
            FROM coffees
            ORDER BY id ASC
            LIMIT 3;
            `);
            return result.rows;
        } catch (err) {
            console.error('Erreur lors de la récupération des 3 premiers cafés:', err);
            return [];
        }
    },
    // Récupère tous les cafés selon la categorie séléctionné 
    async getAllCoffeesByCategory(category) {
        try {
            const result = await client.query(`
            SELECT coffees.*
            FROM coffees
            WHERE category = $1
            ORDER BY id ASC;
        `, [category]);
            return result.rows;
        } catch (err) {
            console.error('Erreur lors de la récupération des cafés par catégorie:', err);
        }
    },

    // Récupère le café selon l'ID
    async getCoffeeById(id) {
        try {
            const result = await client.query(`
        SELECT coffees.*
        FROM coffees
        WHERE coffees.id = $1
        GROUP BY coffees.id;
        `, [id]);

            if (result.rowCount === 0) {
                return null;
            } else {
                return result.rows[0];
            }
        } catch (err) {
            console.error('Erreur lors de la récupération du café par ID:', err);
        }
    },

    // Récupère toutes les categories
    async getAllCategories() {
        try {
            const result = await client.query('SELECT DISTINCT category FROM coffees ORDER BY category ASC;');
            return result.rows;
        } catch (err) {
            console.error('Erreur lors de la récupération des catégories de cafés:', err);
        }
    },
};

export default coffeeDataMapper;
