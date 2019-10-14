const router = require('express').Router();
const controllers = require('../../controllers');

router.get('/:resource', async (req, res) => {
  try {
    const resource = req.params.resource;
    const controller = controllers[resource];
    const filter = req.query;

    if (controller == null) {
      res.json({
        confirmation: 'fail',
        message: 'not a vaild resource'
      });
      return;
    }
    const data = await controller.get(filter);
    res.json({
      confirmation: 'success',
      data
    });
  } catch (error) {
    res.json({
      confirmation: 'fail',
      message: error.message
    });
  }
});

router.get('/:resource/:id', async (req, res) => {
  try {
    const resource = req.params.resource;
    const id = req.params.id;

    const controller = controllers[resource];

    if (controller == null) {
      res.json({
        confirmation: 'fail',
        message: 'invalid resource'
      });
      return;
    }
    const data = await controller.getById(id);
    res.json({
      confirmation: 'success',
      data
    });
  } catch (error) {
    res.json({
      confirmation: 'fail',
      message: error.message
    });
  }
});

router.post('/:resource', async (req, res) => {
  try {
    const resource = req.params.resource;
    const controller = controllers[resource];

    if (controller == null) {
      res.json({
        confirmation: 'fail',
        message: 'invalid resource'
      });
      return;
    }
    const data = await controller.post(req.body);
    res.json({
      confirmation: 'success',
      data
    });
  } catch (error) {
    res.json({
      confirmation: 'fail',
      message: 'post failed'
    });
  }
});

router.put('/:resource/:id', async (req, res) => {
  try {
    const resource = req.params.resource;
    const id = req.params.id;
    const body = req.body;
    const controller = controllers[resource];

    if (controller == null) {
      res.json({
        confirmation: 'fail',
        message: 'invalid resource'
      });
      return;
    }
    const data = await controller.put(id, body);
    res.json({
      message: 'success',
      data
    });
  } catch (error) {
    console.error(error);
    res.json({
      confirmation: 'fail',
      message: error.message
    });
  }
});

router.delete('/:resource/:id', async (req, res) => {
  try {
    const resource = req.params.resource;
    const id = req.params.id;
    const controller = controllers[resource];

    if (controller == null) {
      console.log(controller, id)
      res.json({
        confirmation: 'fail',
        message: 'invalid resource'
      });
      return;
    }
    const data = await controller.delete(id);
    res.json({
      confirmation: `successfully removed ${id} `,
      data
    });
  } catch (error) {
    console.error(error);
    res.json({
      confirmation: 'fail',
      message: error.message
    });
  }
});

// const playerRoutes = require('./players');
// const teamRoutes = require('./teams');

// router.use('/players', playerRoutes);
// router.use('/teams', teamRoutes);

module.exports = router;
