import { Router } from "express";
import AuthController from "../../controllers/Auth/AuthController";
import UserRepository from "../../repositories/User/UserRepository";

const authRouter = Router();

authRouter.post("/register", async (request, response) => {
  return AuthController.register(request, response);
});
authRouter.get("/login", async (request, response) => {
  return AuthController.login(request, response);
});

export { authRouter };
