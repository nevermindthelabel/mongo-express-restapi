const router = require("express").Router();
const Profile = require("../../models/Profile");

router.get("/", async (req, res) => {
  try {
    const profiles = await Profile.find();
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.id)
    res.json(profile)
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Internal Server Error")
  }
})

router.post("/", async (req, res) => {
  try {
    const profileData = req.body;
    console.log(profileData);
    const profile = await Profile.create(profileData);
    return res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Internal Server Error");
  }
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  console.log(id)
  try {
    await Profile.deleteOne({ _id: id});
    res.json({ message: "Profile deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Internal Server Error")
  }
})

module.exports = router;
