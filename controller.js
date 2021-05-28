const mongoose = require('mongoose');
const connDB = require('./db');
const path = require('path');


// connDB();
const {
    Schema
} = mongoose;



const dataSchema = new Schema({
    message: String,
    name: String,
    email: String,
    country: String
});

const data = mongoose.model('data', dataSchema);



exports.post = (req, res, next) => {
    data.create({
        name: req.body.name,
        email: req.body.email,
        country: req.body.country

    }, (err, data) => {
        if (err) {
            return res.status(500).json({
                message: err
            })
        } else {
            return res.status(200).json({
                "message": "Your data has been created",
                data
            })
        }
    })






}


exports.find = (req, res, next) => {

    data.findById(req.params.id, (err, data) => {

        if (err) {
            return res.status(500).json({
                message: err
            })
        } else {
            return res.status(200).json({
                message: "This is  your data! ",
                data
            })
        }
    });

}

exports.update = (req, res, next) => {
    data.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        email: req.body.email,
        country: req.body.country
    }, (err, data) => {
        if (err) {
            return res.status(500).json({
                message: err
            })
        } else if (!data) {
            return res.status(200).json({
                message: "We couldn't find your data"
            })
        } else {
            data.save((err, newdData) => {
                if (err) {
                    return res.status(400).json({
                        message: err
                    })
                } else {
                    return res.status(200).json({
                        message: "Data updated successfully!",
                        newdData
                    })
                }
            })
        }
    })

}

exports.delete = (req, res, next) => {
    data.findByIdAndDelete(req.params.id, (err, data) => {
        if (err) {
            return res.status(500).json({
                message: err
            })
        } else {
            return res.status(200).json({
                message: "Data delete successfully!"
            })
        }
    })
}