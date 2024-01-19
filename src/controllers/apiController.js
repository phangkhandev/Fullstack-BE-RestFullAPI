const User = require('../models/user');
const { uploadSingleFile, uploadMultipleFile } = require('../services/fileService');

const getUsersApi = async (req, res) => {
    let results = await User.find({});
    return res.status(200).json(
        {
            errorCode: 0,
            data: results
        }
    )
}

const postCreateUserApi = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    let user = await User.create({
        email: email,
        name: name,
        city: city
    })
    return res.status(200).json(
        {
            EC: 0,
            data: user
        }
    )
}

const putUpdateUserApi = async (req, res) => {
    let { email, name, city, userId } = req.body;
    let user = await User.updateOne({ _id: userId }, { email: email, name: name, city: city });
    return res.status(200).json(
        {
            EC: 0,
            data: user
        }
    )
}

const deleteUserApi = async (req, res) => {
    const id = req.body.userId;
    let user = await User.deleteOne({
        _id: id
    });
    return res.status(200).json(
        {
            EC: 0,
            data: user
        }
    )
}

const postUploadSingleFileApi = async (req, res) => {

    //validate
    if (!req.files || Object.keys(req.files).length === 0) {
        res.status(400).send('No files were uploaded.');
        return;
    }

    let results = await uploadSingleFile(req.files.image);

    console.log("check results: ", results)
    return res.send('check upload single file')
}

const postUploadMultipleFileApi = async (req, res) => {
    //validate
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }
    // console.log(req.files);
    //upload single => files is an object
    //upload multiple => files is an array
    if (Array.isArray(req.files.image)) {
        //upload multiple
        let result = await uploadMultipleFile(req.files.image);
        return res.status(200).json({
            EC: 0,
            data: result
        })
    } else {
        //upload single
        return await postUploadSingleFileApi(req, res);
    }
}

module.exports = {
    getUsersApi, postCreateUserApi, putUpdateUserApi, deleteUserApi, postUploadSingleFileApi, postUploadMultipleFileApi
}