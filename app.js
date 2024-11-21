import 'dotenv/config';
import express from 'express';
import router from './app/router.js';
import { error404Middleware } from './app/middlewares/404.js';

// un peu de config
const PORT = process.env.PORT || 3000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'app/views');

// servir les fichiers statiques qui sont dans "integration"
app.use(express.static('public'));

// routage !
app.use(router);
app.use(error404Middleware);
// on lance le serveur
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});