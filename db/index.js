const mongoose = require('mongoose');


const path = require('path');
require('dotenv').config();
// const {
//     MONGO_URI
// } = process.env;

// const url = process.env.MONGO_URI;


// console.log(MONGO_URI);
// console.log(url);

// const connDB = () => {
//     mongoose.connect(MONGO_URI, {
//             useNewUrlParser: true,
//             useCreateIndex: true,
//             useUnifiedTopology: true,
//             useFindAndModify: false

//         })
//         .then(() => {
//             console.log('connected');
//         })
//         .catch((err) => {
//             console.error(err.message);

//             process.exit(1);
//         })
// }

const connDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/zuritaskdb", {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log('db connected');
    } catch (err) {
        console.error(err.message);

        process.exit(1);

    }
}




module.exports = connDB;