const server = require('./server')
const port = process.env.PORT || '5000'

require('dotenv').config()

server.listen(port, () => {
    const url = `http://localhost:${port}`
    console.table({ url })
})
