import { Request, Response } from "express";
import TaskRepository from "../../repositories/Task/TaskRepository";
import UserRepository from "../../repositories/User/UserRepository";

class TaskController {
  async add(request: Request, response: Response): Promise<Response> {
    const { userId } = request.params;
    const { title } = request.body;

    const task = await TaskRepository.create({
      task: { title, situation: false, userId: Number(userId) },
    });

    return response.status(200).json({ task });
  }

  async readTasks(request: Request, response: Response): Promise<Response> {
    const { userId } = request.params;

    const tasks = await UserRepository.readAllTasks({ id: Number(userId) });

    return response.status(200).json({ tasks });
  }

  async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { title, situation } = request.body;

    const updatedTask = await TaskRepository.update({
      id: Number(id),
      task: { title, situation },
    });

    return response.status(200).json({ updatedTask });
  }

  async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deletedTask = await TaskRepository.delete({ id: Number(id) });

    return response.status(200).json({ deletedTask });
  }
}

export default new TaskController();
