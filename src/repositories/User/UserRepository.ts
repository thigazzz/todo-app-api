import { Prisma, PrismaClient, PrismaPromise, Task, User } from "@prisma/client";
import { UserRepositoryCreateDTO, UserRepositoryDeleteDTO, UserRepositoryFindByEmailDTO, UserRepositoryReadAllTasksDTO, UserRepositoryUpdateDTO } from "../../interfaces/DTOs/repositories/UserRepositoryDTO";

const prisma = new PrismaClient()

class UserRepository {
    async create({user: {name, email, password}}: UserRepositoryCreateDTO): Promise<Prisma.Prisma__UserClient<User>>  {
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password
            },
        })
        return user
    }
    async read(): Promise<PrismaPromise<User[]>> {
        const users = await prisma.user.findMany()
        return users
    }
    async update({id, user: {name,email,password}}: UserRepositoryUpdateDTO): Promise<Prisma.Prisma__UserClient<User>>  {
        const updatedUser = prisma.user.update({
            data: {
                name,
                email,
                password
            },
            where: {
                id
            }
        })
        return updatedUser
    }
    async delete({id}: UserRepositoryDeleteDTO): Promise<void>{
        const deletedUser = await prisma.user.delete({
            where: {
                id
            }
        })
    }
    async findByEmail({email}: UserRepositoryFindByEmailDTO): Promise<User | null> {
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })
        return user
    }

    //tasks relational
    async readAllTasks({id}: UserRepositoryReadAllTasksDTO): Promise<Task[]> {
        const [{tasks}] = await prisma.user.findMany({
            where: {
                id
            },
            select: {
                tasks: true
            }
        })
        return tasks
    }

}

export default new UserRepository()
