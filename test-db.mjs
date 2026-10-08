
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from the specific location
dotenv.config({ path: path.resolve(process.cwd(), '.env/.env.local') });

const MONGODB_URI = process.env.MONGODB_URI;

async function testConnection() {
    console.log('--- Database Connection Test ---');
    
    if (!MONGODB_URI) {
        console.error('Error: MONGODB_URI is not defined in .env/.env.local');
        process.exit(1);
    }

    console.log(`Attempting to connect to: cluster0.zhyml1o.mongodb.net`);

    try {
        await mongoose.connect(MONGODB_URI, {
            serverSelectionTimeoutMS: 5000 // Timeout after 5s
        });
        console.log('SUCCESS: Connection established successfully!');
        
        // Check connection state
        if (mongoose.connection.readyState === 1) {
            console.log('Connection state: Connected');
        }

        // List databases as a final check
        const admin = mongoose.connection.db.admin();
        const dbs = await admin.listDatabases();
        console.log('Databases available:', dbs.databases.map(db => db.name).join(', '));

        await mongoose.disconnect();
        console.log('Disconnected from database.');
        process.exit(0);
    } catch (error) {
        console.error('FAILURE: Could not connect to the database.');
        console.error('Error details:', error.message);
        process.exit(1);
    }
}

testConnection();
