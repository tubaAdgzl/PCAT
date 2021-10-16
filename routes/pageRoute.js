const express = require("express")
const pageController = require("../controllers/pageController")
const photoController = require("../controllers/photoController")
const router = express.Router()

router.route("/").get(photoController.getAllPhotos);
router.route("/about").get(pageController.getAboutPage);
router.route('/create').get(pageController.getAddPage);
router.route("/photos/:id").get(photoController.getPhoto);
router.route("/edit/:id").get(pageController.getEditPage);

module.exports = router	