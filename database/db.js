var mongoose = require("mongoose");
var dotenv = require("dotenv");

dotenv.config();
var USERNAME = process.env.DB_USERNAME;
var PASSWORD = process.env.DB_PASSWORD;

var Connection = async function() {
    var URL = "mongodb://" + USERNAME + ":" + PASSWORD + "@ac-kx7kxom-shard-00-00.y3pd8zs.mongodb.net:27017,ac-kx7kxom-shard-00-01.y3pd8zs.mongodb.net:27017,ac-kx7kxom-shard-00-02.y3pd8zs.mongodb.net:27017/?ssl=true&replicaSet=atlas-5shhdg-shard-0&authSource=admin&retryWrites=true&w=majority";
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true });
        console.log("Database connected successfully ");
    } catch (error) {
        console.log("error while connecting the database " + error.message);
    }
};

module.exports = Connection;
