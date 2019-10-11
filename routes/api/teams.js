const router = require('express').Router();
const Teams = require('../../models/Teams');

router.get('/', async (req, res) => {
  try {
    const teams = await Teams.find();
    res.json(teams)
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Internal server error');
  }
})
