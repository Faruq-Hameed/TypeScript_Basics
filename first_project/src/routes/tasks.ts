import { Router, Request, Response } from "express";
import {Task, tasks} from '../models/tasks';
import StatusCodes from 'http-status-codes'
import { body, validationResult, matchedData } from 'express-validator'

const router = Router();

//validation configuration
const taskValidationRules = [
    body('title').notEmpty().escape().withMessage('Title is required'),
    body('description').notEmpty().escape().withMessage('Description is required'),
    body('completed').isBoolean().escape().withMessage('Completed must be a boolean'),
  ];

//Creating a new Task
router.post('/', taskValidationRules, (req: Request, res: Response) => {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        return res.status(StatusCodes.BAD_REQUEST).json({ errors: errors.array() });
    }

    const { title, description, completed } = req.body
    const task: Task = {
        id: tasks.length + 1,
        title,
        description,
        completed: false
    }
    tasks.push(task)
    res.status(StatusCodes.OK).send({ message:'task added succesfully', task})
})

//Get all tasks
router.get('/', (req: Request, res: Response) => {
    res.status(StatusCodes.OK).send({ message: `Total tasks: ${tasks.length}`, tasks} )
})

//get task by id

router.get('/:id', (req: Request, res: Response) => {
    if (!req.params.id) {
        return res.status(StatusCodes.BAD_REQUEST).send({ message: 'Task Id required'});
    }
    const task = tasks.find(task => task.id === parseInt(req.params.id));
    if (task) {
        res.status(StatusCodes.OK).send({ message:' Task found', task });
        return
    }
    res.status(StatusCodes.NOT_FOUND).send({ message: 'Task not found', task });
}
)

//update a task
router.put('/:id', (req: Request, res: Response) => {
    if (!req.params.id) {
        return res.status(StatusCodes.BAD_REQUEST).send({ message: 'Task Id required'});
    }
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(StatusCodes.BAD_REQUEST).json({ errors: errors.array() });
    }
    const { title, description, completed } = req.body
    const task = tasks.find(task => task.id === parseInt(req.params.id));
    if(task) {
        task.title = title || task.title;
        task.description = description || task.description;
        task.completed = completed || task.completed;
        return res.status(StatusCodes.OK).json({message: 'task updated successfully', task});
    }
    res.status(StatusCodes.NOT_FOUND).send({ message: 'Task not found', task });
})

//Delete a task

router.delete('/:id', (req: Request, res: Response) => {
   
    if (!req.params.id) {
        return res.status(StatusCodes.BAD_REQUEST).send({ message: 'Task Id required'});
    }
    const taskIndex = tasks.findIndex(task => task.id === parseInt(req.params.id));
    if(taskIndex >= 0) {
        tasks.splice(taskIndex, 1);
        return res.status(StatusCodes.OK).send({ message:'Task deleted successfully'});
    }
    res.status(StatusCodes.NOT_FOUND).send({ message: 'Task not found'});

});

export default router;