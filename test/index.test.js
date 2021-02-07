const supertest = require("supertest")

const startServer = require('../src/infrastructure/webServerFramework/startApp')

jest.setTimeout(60000)

describe('route : /', () => {
    let request

    beforeAll(async done => {
        const app = await startServer()
 
        request = supertest(app)
        done()
    })

    it('should return {wel:"come"}', async (done) => {
        const res = await request.get('/')

        expect(res.body).toEqual({wel:"co"})
        done()
    })
})