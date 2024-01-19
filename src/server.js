require('dotenv').config()
const express = require('express');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const apiRoutes = require('./routes/api');
const connection = require('./config/database');
const fileUpload = require('express-fileupload');

const app = express()
const port = process.env.PORT || 6868;
const hostname = process.env.HOST_NAME;

//config fileupload
app.use(fileUpload());

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//config templete engine
configViewEngine(app);

//khai bao routes
app.use('/', webRoutes);
app.use('/v1/api', apiRoutes);

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


