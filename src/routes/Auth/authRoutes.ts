import { Router } from "express";
import AuthController from "../../controllers/Auth/AuthController";
import { authenticateToken } from "../../middlewares/authenticateToken";

const authRouter = Router();

authRouter.post("/register", async (request, response) => {
  return AuthController.register(request, response);
});
authRouter.post("/login", async (request, response) => {
  return AuthController.login(request, response);
});
authRouter.get("/active_account/:token", async (request, response) => {
  return AuthController.verifyAccount(request, response);
});
authRouter.get('/refresh', authenticateToken ,(request, response) => {
  return AuthController.refresh(request, response);
})

export { authRouter };
