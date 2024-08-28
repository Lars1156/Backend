const Project = require('../model/projectModel');

// Creating a New Projects
exports.createProject = async(projectData)=>{
    try {
        const project = new Project(projectData);
        await project.save();
        return project;
    } catch (error) {
        throw new Error('Error creating project: ' + error.message);
    }
}

// Geatting All projects 

exports.getAllProjects = async() =>{
    try {
        const projects = await Project.find();
        return projects;
    } catch (error) {
        throw new Error('Error retrieving projects: ' + error.message);
    }
};
// Get Single Project 
exports.getProjectId  = async(projectId) =>{
    try {
        const project = await Project.findById(projectId);
        if (!project) {
            throw new Error('Project not found');
        }
        return project;
    } catch (error) {
        throw new Error('Error retrieving project: ' + error.message);
    }
}
// Update a project by ID
exports.updateProject = async (projectId, updateData) => {
    try {
        const project = await Project.findByIdAndUpdate(projectId, updateData, { new: true });
        if (!project) {
            throw new Error('Project not found');
        }
        return project;
    } catch (error) {
        throw new Error('Error updating project: ' + error.message);
    }
};

// Delete a project by ID
 exports.deleteProject = async (projectId) => {
    try {
        const project = await Project.findByIdAndDelete(projectId);
        if (!project) {
            throw new Error('Project not found');
        }
        return project;
    } catch (error) {
        throw new Error('Error deleting project: ' + error.message);
    }
};