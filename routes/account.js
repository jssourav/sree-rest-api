const express = require("express");
const accountController = require("../controllers/account");

const router = express.Router();

// GET /v1/account
router.get("/account", accountController.getAccount);

// POST /v1/account
router.post("/account", accountController.postAccount);

// router.patch("/account/:accountId", accountController.patchAccount);

module.exports = router;
