const Task = require('../models/Task');
const taskController = {};

// get all tasks
taskController.list = async(req, res) => {
	try {

		const tasks = await Task.find();

  		return res.status(200).json(tasks);

	} catch(error) {

        return res.status(400).json({
            message: 'Ocurrio un error',
            error:error
        });

    }
}

// get a task
taskController.findTask = async(req, res) => {
	try {

		const id = req.params.id;
		const task = await Task.findById(id);

  		return res.status(200).json(task);

	} catch(error) {

        return res.status(400).json({
            message: 'Ocurrio un error',
            error:error
        });

    }
}

// create a task
taskController.create = async(req, res) => {
  try {

    	const {name, description} = req.body;
  		const newItem = new Task({
  		    name: name,
  		    description: description
  		});

  		await newItem.save();

  		return res.status(200).json({
  			message: 'Tarea creada!',
        task:newItem
  		});

	} catch(error) {

    return res.status(400).json({
        message: 'Ocurrio un error',
        error:error
    });

  }
}

// update a task
taskController.update = async(req, res) => {
  try {

  	const id = req.params.id;
  	const body = req.body;
  	const task = await Task.findByIdAndUpdate(id, body);

		return res.status(200).json({
			message: 'Tarea Actualizada!'
		});

	} catch(error) {

    return res.status(400).json({
        message: 'Ocurrio un error',
        error:error
    });

  }
}

// delete a task
taskController.delete = async(req, res) => {
  try {

  	const id = req.params.id;
  	const task = await Task.findById(id);

  	if(!task){
        return res.status(401).json({message: 'Tarea no encontrada'});
    }

    await task.delete();

		return res.status(200).json({
			message: 'Tarea Eliminada!'
		});

	} catch(error) {

    return res.status(400).json({
        message: 'Ocurrio un error',
        error:error
    });

  }
}

module.exports = taskController;