const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const adminSchema = new mongoose.Schema({
    userName: {
        type: String,
        require: [true, "userName is required"],
    },
    email: {
        type: String,
        require: [true, "email is required"],
    },
    password: {
        type: String,
        require: [true, "password is required"],
        minlength: 6,
    },
}, {timestamps: true});


// adminSchema.pre("save", async () => {});
adminSchema.pre("save", async function (next) {
    if(!this.isModified("password")) {
        return next();
    }

    this.password = await bcrypt.hash(this.password, 12);
});

adminSchema.method.comparePassword = async function (matchedPassword) {
    return await bcrypt.compare(matchedPassword, this.password);
};

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;