require('dotenv').config()
const express = require('express')
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web')

const app = express()
const port = process.env.PORT || 6868;
const hostname = process.env.HOST_NAME;


//config templete engine
configViewEngine(app);


//khai bao routes
app.use('/', webRoutes);

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})