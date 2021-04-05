const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/practice';
const options = {
    useNewUrlParser: true, 
    useCreateIndex: true,
    useUnifiedTopology: true
};

mongoose.connect(uri, options)
.then(
    () => { console.log('Conectado a DB') },
    err => { console.log(err) }
);