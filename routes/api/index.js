const router = require('express').Router();
const profileRoutes = require('./profile');
const teamRoutes = require('./team');

router.use('/profiles', profileRoutes);
// router.use('/team', teamRoutes);

module.exports = router;
