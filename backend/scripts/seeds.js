// require (dotenv, mongoose)
require("dotenv").config();
const mongoose = require("mongoose");

// Admin model
const Admin = require("../models/Admin");

// create new function(server)
const seedSuperAdmin = async () => {
    try {
        // DB connected
        await mongoose.connect(process.env.MONGO_URL);
        console.log("DB is connected");
        // exist Admin
        const existAdmin = await Admin.findOne({
            email: process.env.EMAIL_ADMIN,
        });

        if(existAdmin) {
            return console.log("Already found admin");
        }

        // create new admin
        const newAdmin = {
            userName: "Super Admin",
            email: process.env.EMAIL_ADMIN,
            password: process.env.ADMIN_PASSWORD,
        };

        const admin = await Admin.create(newAdmin);

        console.log(admin);
    } catch (error) {
        console.log(error);
    } finally {
        await mongoose.connection.close();
        console.log("DB is closed");
        process.exit(0);
    }
};

// run function
seedSuperAdmin();