import mongoose from 'mongoose';
import { DB_URI } from '../config/config.js';

export const connectDB =  async ()=>{
    try {
        await mongoose.connect(`${DB_URI}/taskly`);
        console.log("Database connected");        
    } catch (err) {
        console.error("failed to connect database", err);
        process.exit(1);
    }
};