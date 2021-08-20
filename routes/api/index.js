const router = require("express").Router();
const locationRoutes = require("./location-route");
const travellerRoutes = require("./traveller-route");
const tagRoutes = require("./tags-route");

router.use("/location", locationRoutes);
router.use("/traveller", travellerRoutes);
router.use("/tags", tagRoutes);

module.exports = router;
