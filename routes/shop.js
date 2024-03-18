const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  const products = adminData.products;
  // res.sendFile(path.join(rootDir, 'views', 'shop.ejs'));
  res.render("shop", {title : 'halo', products : products})
});

module.exports = router;

