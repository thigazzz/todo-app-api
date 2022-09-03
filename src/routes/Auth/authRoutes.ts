import { Router } from "express";
import UserRepository from "../../repositories/User/UserRepository";

const authRouter = Router();

authRouter.post("/register", async (request, response) => {
  const {
    name,
    email,
    password,
  }: { name: string; email: string; password: string } = request.body;

  const user = await UserRepository.create({user: {name, email, password}})

  return response.status(200).json({user})
});

export { authRouter };
