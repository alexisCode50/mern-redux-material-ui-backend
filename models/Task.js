const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
	name : {
        type: String,
        required: [true, 'The name is required']
    },
    description: {
        type: String,
        required: [true, 'The description is required'],
    }
});

module.exports = mongoose.model('Task', taskSchema);