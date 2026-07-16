

import mongoose from "mongoose";

const db = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);

        console.log("Database Connected Successfully");
    } catch (error) {
        console.log("Database Connection Failed");
        console.log(error.message);
        process.exit(1);
    }
};

export default db;