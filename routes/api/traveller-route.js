const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Lookin' Good!");
});

module.exports = router;
