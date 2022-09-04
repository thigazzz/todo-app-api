import { Router } from "express";
import { authenticateToken } from "../middlewares/authenticateToken";
import { authRouter } from "./Auth/authRoutes";
import { taskRouter } from "./Task/taskRoutes";

const router = Router();

router.get("/", (request, response) => {
  return response.status(200).json({ messsage: "ok" });
});

router.use("/auth", authRouter);
router.use("/task", authenticateToken, taskRouter);

export { router };
