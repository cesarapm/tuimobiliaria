const { Router } = require("express");
const router = new Router();

const fetch = require("node-fetch");

router.get("/", async (req, res) => {
  const url = `https://api.easybroker.com/v1/locations?query=${req.query.miParametro}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "X-Authorization": global.INV,
    },
  };

  fetch(url, options)
    .then((rese) => rese.json())
    .then((json) => res.json(json))
    .catch((err) => console.error("error:" + err));
});

module.exports = router;
