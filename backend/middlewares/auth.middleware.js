// jwt
const jwt = require("jsonwebtoken");

// Admin
const Admin = require("../models/Admin");

// middleware
const verifyToken = async (req, res, next) => {
    try {
        // get token from headers
        const authHeader = req.headers.authorization;

        // if no token
        if (!token || !token.startsWith("Bearer ")) {
            return res.status(400).json({
                message: "invalid token",
            });
        }

        const token = authHeader.split(" ")[1];

        const decode = await jwt.verify(token, process.env.JWT_SECRET);

        next();
    } catch (error) {
        next(error);
    }
};

module.exports = verifyToken;