const router = require('express').Router();
const apiRoutes = require('./api');

// router.use('/api', apiRoutes);

const player = [
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

router.get('/api/players', (req, res) => {
  res.json({
    confirmation: 'Success',
    data: player
  });
});

router.get('/api/teams', (req, res) => {
  res.json({
    confirmation: 'Success',
    data: teams
  });
});

module.exports = router;
