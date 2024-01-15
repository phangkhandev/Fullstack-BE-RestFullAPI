const connection = require("../config/database");

const getHomepage = (req, res) => {

    connection.query(
        'select * from Users u',
        function (err, results, fields) {
            console.log("results= ", results); // results contains rows returned by server
        }
    );
    res.send('Hello');
}

const getABC = (req, res) => {
    res.render('sample.ejs');
}

module.exports = {
    getHomepage, getABC
}