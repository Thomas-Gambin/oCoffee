// 1. require le module
import pg from 'pg';

// 2. Client connecté (assigné après connexion réussie)
let client = null;

// 3. Fonction pour connecter avec retry (nouveau client à chaque tentative)
async function connectWithRetry(retries = 5, delay = 2000) {
    for (let i = 0; i < retries; i++) {
        const attemptClient = new pg.Client(process.env.PG_URL);
        try {
            await attemptClient.connect();
            console.log('✅ Connexion à PostgreSQL réussie');
            client = attemptClient;
            return;
        } catch (error) {
            console.log(`❌ Tentative de connexion ${i + 1}/${retries} échouée:`, error.message);
            await attemptClient.end().catch(() => {});
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
