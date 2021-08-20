const router = require("express").Router();
// const apiRoutes = require("./api");

router.get("/api", (req, res) => {
  console.log("Lookin' Good!");
});

module.exports = router;
