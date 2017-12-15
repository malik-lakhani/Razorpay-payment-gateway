var express = require('express');
var router = express.Router();
var request = require('request');
require('dotenv').config()

const products = [
  {
    product_id: 1,
    name: "belt",
    price: 100 * 100,
    description: "this is a good belt"
  },
  {
    product_id: 2,
    name: "watch",
    price: 1000 * 100,
    description: "this is a good watch"
  },
  {
    product_id: 3,
    name: "keyboard",
    price: 10000 * 100,
    description: "this is a good belt"
  },
]
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/products/:id/payments/:payment_id/capture', function(req, res) {
  console.log(req.body, req.params);

  const productDetails = products.find(product => product.product_id === Number(req.params.id))
  console.log(productDetails)
  request({
    method: 'POST',
    url: `https://${process.env.ACCESS_KEY}:${process.env.SECRET}@api.razorpay.com/v1/payments/${req.params.payment_id}/capture`,
    form: {
      amount: productDetails.price
    }
  }, function (error, response, body) {
    if (error || response.statusCode !== 200) {
      console.log(JSON.parse(body).error.description)
      res
      .status(500)
      .json({
        msg: JSON.parse(body) &&
        JSON.parse(body).error &&
        JSON.parse(body).error.description ?
        JSON.parse(body).error.description :
        'Something went wrong. Please try again.'
      });
    } else {
      res.send("success")
    }
  });
})
module.exports = router;
