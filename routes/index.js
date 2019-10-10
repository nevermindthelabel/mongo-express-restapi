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

router.get('/api/:resourse', (req, res) => {
  const resourse = req.params.resourse;

  if (resourse === 'players') {
    res.json({
      confirmation: 'Success',
      data: players
    });
  } else if (resourse === 'teams') {
    res.json({
      confirmation: 'Success',
      data: teams
    });
  }
});
module.exports = router;
