import {Prisma, PrismaClient, Task} from '@prisma/client'
import { urlencoded } from 'express';
import { TaskRepositoryCreateDTO, TaskRepositoryDeleteDTO, TaskRepositoryReadDTO, TaskRepositoryUpdateDTO } from "../../interfaces/DTOs/repositories/TaskRepositoryDTO";

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
    async read({userId}: TaskRepositoryReadDTO): Promise<Task[]> {
        const tasks = await prisma.task.findMany({
            where: {
                userId
            }
        })
        return tasks
    }
    async update({id, userId ,task: {title, situation}}: TaskRepositoryUpdateDTO): Promise<Task> {
        const updatedTask = await prisma.task.update({
            data: {
                title,
                situation
            },
            where: {
                id,
                userId
            }
        })
        return updatedTask
    }
    async delete({id, userId}: TaskRepositoryDeleteDTO): Promise<Task> {
        const deletedTask = await prisma.task.delete({
            where: {
                id,
                userId
            }
        })
        return deletedTask
    }
}