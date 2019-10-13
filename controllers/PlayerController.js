const Player = require('../models/Players');

module.exports = {
  get: async params => {
    try {
      return new Promise((resolve, reject) => {
        Player.find(params).then(data => {
          resolve(data);
        });
      });
    } catch (error) {
      reject(error);
      console.error(error);
    }
  },
  getById: async id => {
    try {
      return new Promise((resolve, reject) => {
        Player.findById(id).then(data => {
          resolve(data);
        });
      });
    } catch (error) {
      reject(error);
      console.error(error);
    }
  },
  post: params => {
    return new Promise((resolve, reject) => {
      Player.create(params)
        .then(data => {
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
};
