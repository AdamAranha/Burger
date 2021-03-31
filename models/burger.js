const orm = require('../config/orm.js');

const burger = {
    getOrders: async function () {
        return await orm.selectAll()
    },
    addOrder: async function (name) {
        return await orm.insertOne(name)
    },
    devour: async function (name) {
        return await orm.updateOne(name)
    }
};

module.exports = burger