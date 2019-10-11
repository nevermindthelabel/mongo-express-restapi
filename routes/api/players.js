const router = require('express').Router();
const Players = require('../../models/Players');

router.get('/', (req, res) => {
  Players.find().then(data => {
    res.json({
      confirmation: 'Success',
      data
    });
  });
});

router.get('/:id', async (req, res) => {
  try {
    const profile = await Players.findById(req.params.id);
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Internal Server Error');
  }
});

router.post('/', async (req, res) => {
  try {
    const profileData = req.body;
    console.log(profileData);
    const profile = await Players.create(profileData);
    return res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Internal Server Error');
  }
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    await Players.deleteOne({ _id: id });
    res.json({ message: 'Player deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
