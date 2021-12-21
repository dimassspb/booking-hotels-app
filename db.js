const mongoose = require("mongoose");

var mongoUrl =
    "mongodb+srv://dimassspb:pathfinder999@cluster0.bt65b.mongodb.net/hotels";

mongoose.connect(mongoUrl, { useUnifiedTopology: true, useNewUrlParser: true });

var connection = mongoose.connection;
connection.on("error", () => {
    console.log("Mongo DB connection: failed");
});

connection.on("connected", () => {
    console.log("Mongo DB connection: connected");
});

module.exports = mongoose;
