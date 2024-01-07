const express = require('express')
const path = require('path');
require('dotenv').config()

console.log(process.env)

const app = express()
const port = process.env.PORT || 6868;
const hostname = process.env.HOST_NAME;

//config templete engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/domp', (req, res) => {
    res.render('sample.ejs')
})

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})