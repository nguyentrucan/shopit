const { default: mongoose } = require("mongoose")

const connectDatabase = () => {
    try {
        const conn = mongoose.connect(process.env.DB_LOCAL_URI);
        console.log("Database Connected Successfully");
    } catch (error) {
        console.log("Database error");
    }
};
module.exports = connectDatabase;