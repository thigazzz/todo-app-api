import {Prisma, PrismaClient, Task} from '@prisma/client'
import { urlencoded } from 'express';
import { TaskRepositoryCreateDTO, TaskRepositoryDeleteDTO, TaskRepositoryIdDTO, TaskRepositoryReadDTO, TaskRepositoryUpdateDTO } from "../../interfaces/DTOs/repositories/TaskRepositoryDTO";

const prisma = new PrismaClient()

class TaskRepository {
    async create({task: {title, situation, userId}}: TaskRepositoryCreateDTO): Promise<Task> {
        const task = await prisma.task.create({
            data: {
                title,
                situation,
                userId
            }
        })
        return task
    }
    async read({id}: TaskRepositoryReadDTO): Promise<Task[]> {
        const tasks = await prisma.task.findMany({
            where: {
                id
            }
        })
        return tasks
    }
    async update({id ,task: {title, situation}}: TaskRepositoryUpdateDTO): Promise<Task> {
        const updatedTask = await prisma.task.update({
            data: {
                title,
                situation
            },
            where: {
                id,
            }
        })
        return updatedTask
    }
    async delete({id}: TaskRepositoryDeleteDTO): Promise<Task> {
        const deletedTask = await prisma.task.delete({
            where: {
                id,
            }
        })
        return deletedTask
    }
    async findById({id}: TaskRepositoryIdDTO): Promise<Task | null> {
        const task = await prisma.task.findUnique({
            where: {
                id,
            }
        })
        return task
    }
}

export default new TaskRepository()
