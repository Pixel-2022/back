const express = require('express');
const User = require('../models/user');
const Dict=require('../models/WordDict');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const dict = await Dict.findAll();
    res.render('sequelize', { dict });

    const users = await User.findAll();
    res.render('sequelize', { users });

  } catch (err) {
    console.error(err);
    next(err);
  }
});



module.exports = router;
