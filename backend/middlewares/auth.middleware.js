// jwt
const jwt = require("jsonwebtoken");

// Admin
const Admin = require("../models/Admin");

// middleware
const verifyToken = async (req, res, next) => {
    try {
        // Get token from header
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({
                message: "No token provided",
            });
        }

        const token = authHeader.split(' ')[1];

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Check if admin exists
        const admin = await Admin.findById(decoded.id);

        if (!admin) {
            return res.status(401).json({
                message: "Admin not found"
            });
        }

        // Attach admin to request
        req.admin = admin;

        next();

    } catch (error) {
        return res.status(401).json({
            message: "Invalid",
        });
    }
};

module.exports = verifyToken;