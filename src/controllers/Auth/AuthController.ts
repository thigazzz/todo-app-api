import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { transporter } from "../../services/nodemailer";
import UserRepository from "../../repositories/User/UserRepository";
import { generateHash } from "../../utils/generateHash";
import { generateToken } from "../../utils/generateToken";

class AuthController {
  async register(request: Request, response: Response): Promise<Response> {
    const {
      name,
      email,
      password,
    }: { name: string; email: string; password: string } = request.body;

    const userExists = await UserRepository.findByEmail({ email: email });

    if (userExists)
      return response.status(400).json({ error: "User already exists" });

    const token = jwt.sign(
      { email, password, name },
      String(process.env.JWT_SECRET),
      { expiresIn: 300 }
    );

    await transporter.sendMail({
      from: '"Thiago" <thi@gmail.com>',
      to: email,
      subject: "Confirmation Register",
      text: "Confirmation Register",
      html: `<h1>Email de comfirmação!</h1>\n<a href="http://localhost:4444/auth/active_account/${token}">Active your account</a>`,
    });

    return response.status(200).json({ message: "send active email" });
  }
  async login(request: Request, response: Response): Promise<Response> {
    const { email, password }: { email: string; password: string } =
      request.body;

    const userExists = await UserRepository.findByEmail({ email: email });

    if (!userExists)
      return response
        .status(400)
        .json({ message: "email or password invalids!" });

    if (!(await bcrypt.compare(password, userExists.password)))
      return response
        .status(400)
        .json({ message: "email or password invalids!" });

    return response
      .status(200)
      .json({ user: userExists, token: generateToken(String(userExists.id)) });
  }
  async verifyAccount(request: Request, response: Response): Promise<Response> {
    const { token } = request.params;

    let userName = "";
    let userEmail = "";
    let userPassword = "";

    jwt.verify(
      token,
      String(process.env.JWT_SECRET),
      async (error, decoded) => {
        if (error) return response.status(400).json({ error: "Token invalid" });

        const { email, name, password } = <
          {
            email: string;
            password: string;
            name: string;
            iat: 1665132932;
            exp: 1665133232;
          }
        >decoded;

        (userName = name), (userEmail = email), (userPassword = password);
      }
    );
    const user = await UserRepository.create({
      user: {
        name: userName,
        email: userEmail,
        password: await generateHash(userPassword, 10),
      },
    });

    return response.json({ user, token: await generateToken(String(user.id)) });
  }

  async refresh(request: Request, response: Response): Promise<Response> {
    const {user} = request

    return response.json({token: generateToken(String(user.id))})
  }
}

export default new AuthController();
