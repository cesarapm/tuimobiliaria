const { Router } = require("express");
const router = new Router();

const fetch = require("node-fetch");

router.get("/:id", async (req, res) => {
  const id = req.params.id;

  const url =
    "https://api.easybroker.com/v1/properties?page=" +
    `${id}` +
    "&limit=20&search[statuses][]=published";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "X-Authorization": "bsytg8rgtuuhm952r71yp0lxs9y46k",
    },
  };

  fetch(url, options)
    .then((rese) => rese.json())
    .then((json) => res.json(json))
    .catch((err) => console.error("error:" + err));
});

module.exports = router;
