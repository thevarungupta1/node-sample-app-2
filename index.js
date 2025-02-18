const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World');
    res.end();
})

app.listen(5000, () => {
    console.log('app is running on server port: 5000')
})