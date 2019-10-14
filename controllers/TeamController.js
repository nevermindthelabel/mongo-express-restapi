const Team = require('../models/Teams');

module.exports = {
  get: async params => {
    try {
      return new Promise((resolve, reject) => {
        Team.find(params).then(data => {
          resolve(data);
        });
      });
    } catch (err) {
      reject(err);
      console.error(err);
    }
  },
  getById: async id => {
    try {
      return new Promise((resolve, reject) => {
        Team.findById(id).then(data => {
          resolve(data);
        });
      });
    } catch (error) {
      reject(error);
      console.error(error.message);
    }
  },
  post: params => {
    return new Promise((resolve, reject) => {
      Team.create(params)
        .then(data => {
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  put: (id, params) => {
    return new Promise((resolve, reject) => {
      Team.findByIdAndUpdate(id, params, { new: true }).then(data => {
        resolve(data).catch(error => {
          reject(error);
        });
      });
    });
  }
};
