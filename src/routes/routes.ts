import { Router } from "express";
import { userRouter } from "./User/UserRoutes";

const router = Router()

router.get('/', (request, response) => {
    return response.status(200).json({messsage: 'ok'})
})
router.use('/admin/users', userRouter)

export {router}