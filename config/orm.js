const db = require('./connection')


function selectAll() {
    return db.query('SELECT * FROM orders;')
}

function insertOne(name) {
    return db.query(`INSERT INTO orders (name, devoured) VALUES ('${name}', FALSE);`)
}

function updateOne(name) {
    return db.query(`UPDATE orders SET devoured = TRUE WHERE name = '${name}';`)
}

module.exports = { selectAll, insertOne, updateOne }