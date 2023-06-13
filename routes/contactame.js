const { Router } = require("express");
const router = new Router();

const fetch = require("node-fetch");

router.get("/", async (req, res) => {
  let ids1 = req.query.re1;
  let ids2 = req.query.re2;
  let ids3 = req.query.re3;
  let ids4 = req.query.re4;
  let ids5 = req.query.re5;

  const url = "https://api.easybroker.com/v1/contact_requests";
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "X-Authorization": global.INV,
    },
    body: JSON.stringify({
      name: ids1,
      phone: ids3,
      email: ids2,
      property_id: ids5,
      message: ids4,
      source: "Pruebas.com",
    }),
  };

  fetch(url, options)
    .then((rese) => rese.json())
    .then((json) => res.json(json))
    .catch((err) => console.error("error:" + err));
  console.log(req.query);
});

module.exports = router;
