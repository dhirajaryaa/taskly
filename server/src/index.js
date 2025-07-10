import { app } from './app.js';
import { PORT } from './config/config.js';
import { connectDB } from './db/index.js'


connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log("server running in port -", PORT);
        });
    })
    .catch((err) => {
        console.error("Database connection error", err);
        process.exit(1);
    })