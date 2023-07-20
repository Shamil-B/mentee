const mongoose = require('mongoose');
const User = require('./User');
const Class = require('./Class');


const enrollmentSchema = new mongoose.Schema({
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User', 
            required: true,
        },
        class: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Class', 
            required: true,
        },
        enrollmentDate: {
            type: Date,
            default: Date.now,
        },
});

const Enrollment = mongoose.model('Enrollment', enrollmentSchema);


module.exports = Enrollment;
