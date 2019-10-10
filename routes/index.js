const router = require('express').Router();
const apiRoutes = require('./api');

// router.use('/api', apiRoutes);

const players = [
  {
    firstName: 'Kyler',
    lastName: 'Murray',
    team: 'Cardinals',
    position: 'qb'
  },
  {
    firstName: 'Aaron',
    lastName: 'Rogers',
    team: 'Packers',
    position: 'qb'
  },
  {
    firstName: 'Larry',
    lastName: 'Fitzgerald',
    team: 'Cardinals',
    position: 'wr'
  }
];

const teams = [
  { teamName: 'Cardinals', teamState: 'Arizona', teamConference: 'nfc' },
  { teamName: 'Packers', teamState: 'Wisconsin', teamConference: 'nfc' }
];

const db = {
  teams,
  players
};

router.get('/api/:resource', (req, res) => {
  const resource = req.params.resource;
  const data = db[resource];

  if (data == null) {
    res.json({
      confirmation: 'Fail',
      message: 'bad request'
    });
    return;
  }
  res.json({
    confirmation: 'success',
    data
  });
});

module.exports = router;
