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
authRouter.get('/login', async (request, response) => {
    const {
        email,
        password
      }: { email: string; password: string } = request.body;

    const userExists = await UserRepository.findByEmail({email: email})

    if (!userExists) return response.status(400).json({message: 'email or password invalids!'})

    if (!(userExists.password === password)) return response.status(400).json({message: 'email or password invalids!'})

    return response.status(200).json({message: 'ok'})
})

export { authRouter };
