// Dotenv
require("dotenv").config();

// express
const express = require("express");
const app = express();

// morgan
const morgan = require("morgan");

// middleware json
app.use(express.json());

// connection DB
const connectDB = require("./config/db");

connectDB();

// simple logger
if(process.env.NODE_ENV === "dev") {
    // app.use((req, res, next) => {
    //     console.log(`${req.method} ${req.originalUrl}`);
    //     next();
    // });

    app.use(morgan("dev")); // dev: development (performance)      combined: production (error handling)
}

// Test rout
app.get("/test", (req, res, next) => {
    return res.status(200).json({message: "Test Route"});
});

const adminRoute = require("./routes/auth.route");
app.use("/api/dashboard", adminRoute);

// Port
const PORT = process.env.PORT || 8000;

// Run server
app.listen(PORT, () => {
    console.log(`Server is running in: ${PORT}`);
});