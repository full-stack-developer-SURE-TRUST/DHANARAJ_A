const mongoose = require("mongoose");
var employeeSchema = new mongoose.Schema({
    fullName:{
        type: String,
        required: "This is required"
    },
    email:{
        type: String
    },
    mobile:{
        type: String
    },
    city:{
        type: String
    }
});

mongoose.model('Employee',employeeSchema);