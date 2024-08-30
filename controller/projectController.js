const projectService = require('../services/projectService');

// Create a new project
exports.createProject = async (req, res) => {
    try {
        const project = await projectService.createProject(req.body);
        res.status(201).json(project);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all projects
exports.getAllProjects = async (req, res) => {
    try {
        const projects = await projectService.getAllProjects();
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a project by ID
exports.getProjectById = async (req, res) => {
    try {
        const project = await projectService.getProjectById(req.params.id);
        res.status(200).json(project);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

// Update a project by ID
 exports.updateProject = async (req, res) => {
    console.log("Runnging Project Status" , req.body);
    
    try {
        // Validate project status if provided
        if (req.body.projectStatus && !['Registered', 'Running', 'Closed', 'Cancelled'].includes(req.body.projectStatus)) {
            return res.status(400).json({ error: 'Invalid project status' });
        }

        const project = await projectService.updateProject(req.params.id, req.body);
        res.status(200).json(project);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


// Delete a project by ID
exports.deleteProject = async (req, res) => {
    try {
        await projectService.deleteProject(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

