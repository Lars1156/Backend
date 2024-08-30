const mongoose = require('mongoose');
const projectSchema = new mongoose.Schema({
    projectName: {
        type: String,
        required: true,
        trim: true
    },
    projectReson: {
        type: String,
        required: true,
        enum: ['ForBusiness', 'ForPersonal', 'ForDealership', 'ForTransport'], // Corrected enum values
        default: 'ForBusiness'
    },
    projectType: {
        type: String,
        required: true,
        enum: ['Internal', 'Development', 'Research', 'Marketing'],
        default: 'Internal'
    },
    projectDivisio: {
        type: String,
        required: true,
    },
    projectCatagoriy: {
        type: String,
        required: true,
        enum: ['Category A', 'Category B', 'Category C'], // Corrected enum values
        default: 'Category A'
    },
    projectPriority: {
        type: String,
        required: true,
        enum: ['Low', 'Medium', 'High'],
        default: 'Medium'
    },
    projectDepartment: {
        type: String,
        required: true,
        enum: ['Management', 'Strategy', 'Software', 'E-Commerce', 'Health Care'], // Corrected enum values
        default: 'Strategy'
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true,
        validate: {
            validator: function (value) {
                return value >= this.startDate;
            },
            message: 'End date cannot be earlier than start date.'
        }
    },
    projectStatus: {
        type: String,
        enum:['Registered', 'Running', 'Closed', 'Cancelled'],
        default: 'Registered'
    },
    location: {
        type: String,
        required: true,
        trim: true
    }
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;