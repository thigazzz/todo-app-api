import { Router } from "express";
import AuthController from "../../controllers/Auth/AuthController";

const authRouter = Router();

authRouter.post("/register", async (request, response) => {
  return AuthController.register(request, response);
});
authRouter.post("/login", async (request, response) => {
  return AuthController.login(request, response);
});
authRouter.get('refresh', (request, response) => {
  
})

export { authRouter };
