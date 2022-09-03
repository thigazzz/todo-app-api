import { Router } from "express";
import { authRouter } from "./Auth/authRoutes";

const router = Router()

router.get('/', (request, response) => {
    return response.status(200).json({messsage: 'ok'})
})
router.use('/auth', authRouter)

export {router}