const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.json({hostname: req.hostname})
})

app.get('/:one/:two', (req, res) => {
    res.json({
        one: req.params.one,
        two: req.params.two
    })
})

app.listen(3000, () => {
    console.log('HTTP Server running on localhost:3000')
})
