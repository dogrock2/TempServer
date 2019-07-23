const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require('fs');
const jFile = require("../menu.json");

router.get("/", (req, res) => {
	
	return res.render("index");

});

router.get("/menu", (req, res) => {
	
	return res.json(jFile);
	
});

module.exports = router;
