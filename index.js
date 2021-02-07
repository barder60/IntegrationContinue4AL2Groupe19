require('dotenv').config()
const express = require('express')

const connectMongo = require('./src/infrastructure/repositories/mongo/mongoose')
const startDatabase = require('./src/infrastructure/setUp/startDatabase')
const startServer = require('./src/infrastructure/webServerFramework/startApp')

const start = async () => {

  // await startDatabase()

  const server = await startServer()


  await server.listen(3000, () => {
    console.log(`${server.webServerChoice} listening to : 3000`)})
}


start();

