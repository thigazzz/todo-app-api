import { Router } from "express";
import { authRouter } from "./Auth/authRoutes";
import { taskRouter } from "./Task/taskRoutes";

const router = Router()

router.get('/', (request, response) => {
    return response.status(200).json({messsage: 'ok'})
})

router.use('/auth', authRouter)
router.use('/task', taskRouter)

export {router}