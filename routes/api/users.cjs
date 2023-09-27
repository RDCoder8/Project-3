const express = require("express")
const router = express.Router()
const usersCtrl = require("../../controllers/api/users.cjs")
const ensureLoggedIn = require("../../config/ensureLoggedIn.cjs")

// /api/users
// appends this path to the app.use path in the server
router.post("/", usersCtrl.create)

// /api/users/login
router.post("/login", usersCtrl.login)

// /api/users/
router.delete("/", usersCtrl.deleteUser)

// /api/users/
router.put("/", usersCtrl.update)

router.get('/check-token', ensureLoggedIn,  usersCtrl.checkToken)


module.exports = router