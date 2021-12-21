const express = require("express");

const router = express.Router();

const Hotel = require("../models/hotel");

router.get("/getallhotels", async (req, res) => {
    try {
        const hotels = await Hotel.find({});
        return res.send({ hotels });
    } catch (error) {
        return res.status(400).json({ message: error });
    }
});
module.exports = router;
