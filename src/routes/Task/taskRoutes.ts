import { Router } from "express";
import TaskRepository from "../../repositories/Task/TaskRepository";

const taskRouter = Router()

taskRouter.post('/add/:userId', async (request, response) => {
    const {userId} = request.params
    const {title} = request.body

    const task = await TaskRepository.create({task: {title, situation: false, userId: Number(userId)}})

    return response.status(200).json({task})
})
taskRouter.post('/list/:userId', async (request, response) => {
    const {userId} = request.params

    const tasks = await TaskRepository.read({userId: Number(userId)})

    return response.status(200).json({tasks})
})  

export {taskRouter}