const express = require("express")
const router = express.Router()
const photoController = require("../controllers/photoController")

router.route('/').post(photoController.createPhoto);
router.route('/:id').put(photoController.updatePhoto);
router.route('/:id').delete(photoController.deletePhoto);
module.exports = router;