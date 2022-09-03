import { Task } from "@prisma/client";

export interface ITask extends Omit<Task, 'id' | 'createdAt' | 'updatedAt'> {}
