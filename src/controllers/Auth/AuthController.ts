import { Request, Response } from "express";
import bcrypt from 'bcrypt'
import UserRepository from "../../repositories/User/UserRepository";

class AuthController {
  async register(request: Request, response: Response): Promise<Response> {
    const {
      name,
      email,
      password,
    }: { name: string; email: string; password: string } = request.body;

    const user = await UserRepository.create({
      user: { name, email, password: await bcrypt.hash(password, 10)},
    });

    return response.status(200).json({ user });
  }
  async login(request: Request, response: Response): Promise<Response> {
    const { email, password }: { email: string; password: string } =
      request.body;

    const userExists = await UserRepository.findByEmail({ email: email });

    if (!userExists)
      return response
        .status(400)
        .json({ message: "email or password invalids!" });

    if (!await bcrypt.compare(password, userExists.password))
      return response
        .status(400)
        .json({ message: "email or password invalids!" });

    return response.status(200).json({ message: "ok" });
  }
}

export default new AuthController()
