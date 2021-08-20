const router = require("express").Router();

router.get("/", (req, res) => {
  console.log("Lookin' Good!");
});

module.exports = router;
