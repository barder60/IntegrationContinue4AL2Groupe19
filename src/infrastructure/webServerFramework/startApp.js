const { isEqual } = require('lodash')

const startExpress = require('./express/startExpress')
const startFastify = require('./fastify/startFastify')

const startServer = async (webServerChoice) => {
    const server = await startExpress()
    
    server.webServerChoice = 'Express'
        
    return server
}

module.exports = startServer