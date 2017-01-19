const router = require("express").Router();

// ROUTES NEEDED:
// /api/restaurants
// /api/restaurants/1
// /api/review

router.use("/restaurants", require("./restaurant") );
router.use("/review", require("./review") );

module.exports = router