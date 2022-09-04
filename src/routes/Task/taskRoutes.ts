import { Router } from "express";
import TaskController from "../../controllers/Task/TaskController";

const taskRouter = Router()

taskRouter.post('/add/:userId', async (request, response) => {
    return TaskController.add(request, response)
})
taskRouter.post('/list/:userId', async (request, response) => {
    return TaskController.readTasks(request, response)
})
taskRouter.put('/update/:id', async (request, response) => {
    return TaskController.update(request, response)

})
taskRouter.delete('/delete/:id', async (request, response) => {
    return TaskController.delete(request, response)
})

export {taskRouter}