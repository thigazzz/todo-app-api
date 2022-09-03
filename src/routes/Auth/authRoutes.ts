import { Router } from "express";
import AuthController from "../../controllers/Auth/AuthController";

const authRouter = Router();

authRouter.post("/register", async (request, response) => {
  return AuthController.register(request, response);
});
authRouter.get("/login", async (request, response) => {
  return AuthController.login(request, response);
});

export { authRouter };