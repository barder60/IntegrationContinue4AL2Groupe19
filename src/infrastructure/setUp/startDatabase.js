const { isEqual } = require('lodash')

const connectMongo = require('../repositories/mongo/mongoose')

const startDatabase = async (databaseChoice) => {
    connectMongo()
}

module.exports = startDatabase
