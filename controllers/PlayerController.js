const Player = require('../models/Players');

module.exports = {
  get: params => {
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
  getById: id => {
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
  },
  put: (id, params) => {
    return new Promise((resolve, reject) => {
      Player.findByIdAndUpdate(id, params, { new: true })
        .then(data => {
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  delete: (id) => {
    return new Promise((resolve, reject) => {
      Player.findByIdAndRemove(id)
        .then(() => {
          resolve({
            id
          });
        })
        .catch(error => {
          reject(error);
        });
    });
  }
};
