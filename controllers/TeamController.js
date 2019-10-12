const Team = require('../models/Teams');

module.exports = {
  get: async params => {
    try {
      return new Promise((resolve, reject) => {
        Team.find(params).then(data => {
          resolve(data);
        });
      });
    }
    catch (err) {
      reject(err)
      console.error(err);
    }
  }
};
