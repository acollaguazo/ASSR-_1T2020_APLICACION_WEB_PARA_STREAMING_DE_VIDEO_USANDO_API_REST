const {Router} = require("express");
const router = Router();
const {getVideos} = require("../controller/video.controller");
const {getUrlVideo} = require("../controller/video.controller")
router.get('/', getVideos);
module.exports = router;

router.get('/:id', getUrlVideo);