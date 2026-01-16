// 1. require le module
import pg from 'pg';

// 2. Créer un client
const client = new pg.Client(process.env.PG_URL);

// 3. Fonction pour connecter le client avec retry
async function connectWithRetry(retries = 5, delay = 2000) {
    for (let i = 0; i < retries; i++) {
        try {
            await client.connect();
            console.log('✅ Connexion à PostgreSQL réussie');
            return;
        } catch (error) {
            console.log(`❌ Tentative de connexion ${i + 1}/${retries} échouée:`, error.message);
            if (i < retries - 1) {
                console.log(`⏳ Nouvelle tentative dans ${delay}ms...`);
                await new Promise(resolve => setTimeout(resolve, delay));
            } else {
                console.error('❌ Impossible de se connecter à PostgreSQL après', retries, 'tentatives');
                throw error;
            }
        }
    }
}

// 4. Connecter le client
await connectWithRetry();

// 5. Exporter le client connecté
export default client;
