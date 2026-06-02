// Admin model
const Admin = require("../models/Admin");

// joi schema
const loginSchema = require("./validation/authValidation");

// jwt
const jwt = require("jsonwebtoken");

// function
const loginController = async (req, res, next) => {
    try {
        // joi validation
        const { error, value } = loginSchema.validate(req.body, {
            abortEarly: false, // get all errors
            stripUnknown: true, // remove all values unknown
        });

        // check error
        if(error) {
            return res.status(400).json({
                message: error.details.map(err => err.message),
            });
        }

        // get data from value
        const { email, password } = value;

        // check Admin is exect
        const admin = await Admin.findOne({email}).select("+password");

        // if admin not found
        if(!admin) {
            return res.status(400).json({
                message: "Invalid email or password",
            });
        }

        // compare password
        const matchedPassword = await admin.comparePassword(password);

        // if admin not found
        if(!matchedPassword) {
            return res.status(400).json({
                message: "Invalid email or password",
            });
        }

        const token = await jwt.sign({id: admin._id}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIREIN});
        
        // return
        return res.status(200).json({
            message: "login success",
            token
        });
    } catch (error) {
        next(error);
    }
};

// exporting
module.exports = loginController;