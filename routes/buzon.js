const { Router } = require("express");
const router = new Router();

const fetch = require("node-fetch");

router.get("/", async (req, res) => {
// console.log(req.query);

    
  let ids1 = req.query.re1;


  const url = `https://api.easybroker.com/v1/contact_requests?page=${ids1}&limit=20`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'X-Authorization': process.env.INV
    }
  };
  
  fetch(url, options)
    .then((rese) => rese.json())
    .then((json) => res.json(json))
    .catch((err) => console.error("error:" + err));
  console.log(req.query);
});

module.exports = router;

