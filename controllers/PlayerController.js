const Player = require('../models/Players');

module.exports = {
  get: async params => {
    try {
      return new Promise((resolve, reject) => {
        Player.find(params).then(data => {
          resolve(data);
        });
      });
    } catch (err) {
      reject(err);
      console.error(err);
    }
  }
};
