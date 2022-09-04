import { Router } from "express";
import TaskRepository from "../../repositories/Task/TaskRepository";
import UserRepository from "../../repositories/User/UserRepository";

const taskRouter = Router()

taskRouter.post('/add/:userId', async (request, response) => {
    const {userId} = request.params
    const {title} = request.body

    const task = await TaskRepository.create({task: {title, situation: false, userId: Number(userId)}})

    return response.status(200).json({task})
})
taskRouter.post('/list/:userId', async (request, response) => {
    const {userId} = request.params

    const tasks = await UserRepository.readAllTasks({id: Number(userId)})

    return response.status(200).json({tasks})
})
taskRouter.put('/update/:id', async (request, response) => {
    const {id} = request.params
    const {title, situation} = request.body

    const updatedTask = await TaskRepository.update({id: Number(id), task: {title, situation}})

    return response.status(200).json({updatedTask})

})
taskRouter.delete('/delete/:id', async (request, response) => {
    const {id} = request.params

    const deletedTask = await TaskRepository.delete({id: Number(id)})

    return response.status(200).json({deletedTask})
})

export {taskRouter}