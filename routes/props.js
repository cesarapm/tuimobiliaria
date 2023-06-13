const { Router } = require("express");
const router = new Router();

const fetch = require("node-fetch");
const path = require("path");

const filePath1 = path.join(__dirname, "./.env");

require("dotenv").config({ path: filePath1 });

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
      "X-Authorization": process.env.INV,

      // "bsytg8rgtuuhm952r71yp0lxs9y46k",
    },
  };

  fetch(url, options)
    .then((rese) => rese.json())
    .then((json) => res.json(json))
    .catch((err) => console.error("error:" + err));

  // console.log(process.env.INV);
});

module.exports = router;
