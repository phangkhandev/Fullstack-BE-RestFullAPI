const connection = require("../config/database");
const { getAllUsers, getUserById, UpdateUserById, deleteUserById } = require('../services/CRUDService')
const User = require('../models/user');
const { default: mongoose } = require("mongoose");

const getHomepage = async (req, res) => {
    let results = await User.find({});
    return res.render('home.ejs', { listUsers: results })

}

const getABC = (req, res) => {
    res.render('sample.ejs');
}

const getCreatePage = (req, res) => {
    res.render('create.ejs');
}

const getUpdatePage = async (req, res) => {
    const userId = req.params.id;
    let user = await User.findById(userId);
    res.render('edit.ejs', { userEdit: user });
}

const postCreateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    await User.create({
        email: email,
        name: name,
        city: city
    })
    res.redirect('/');
}

const postUpdateUser = async (req, res) => {
    let { email, name, city, userId } = req.body;
    await User.findByIdAndUpdate(userId, { email, name, city });
    res.redirect('/');
}

const postDeleteUserById = async (req, res) => {
    const userId = req.params.id;
    let user = await User.findById(userId);
    res.render('delete.ejs', { userDelete: user });
}

const postDeleteUser = async (req, res) => {
    const userId = req.params.id;
    await User.findByIdAndDelete(userId);
    res.redirect('/');
}

module.exports = {
    getHomepage, getABC, postCreateUser, getCreatePage, getUpdatePage, postDeleteUserById, postUpdateUser, postDeleteUser
}