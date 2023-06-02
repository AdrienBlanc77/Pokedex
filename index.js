import 'dotenv/config';

// Express
import express from 'express';
const app = express();

// Router
import { router } from './app/routers/router.js';
app.use(router);

// Lancement du server
const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => {
    console.log(`Server listening on : http://localhost:${PORT}`);
})
