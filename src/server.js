require('dotenv').config()
const express = require('express');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const connection = require('./config/database');

const app = express()
const port = process.env.PORT || 6868;
const hostname = process.env.HOST_NAME;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//config templete engine
configViewEngine(app);

//khai bao routes
app.use('/', webRoutes);

// const cat = new Kitten({ name: 'phangk4078' });
// cat.save();

(async () => {
    try {
        await connection();
        app.listen(port, hostname, () => {
            console.log(`Example app listening on port ${port}`)
        })
    } catch (error) {
        console.log("error connect to BD: ", error)
    }
})()


