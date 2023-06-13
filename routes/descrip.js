const { Router } = require("express");
const router = new Router();

const fetch = require("node-fetch");

router.get("/:id", async (req, res) => {
  let id = req.params.id;
  const url = `https://api.easybroker.com/v1/properties/${id}`;
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
