import { User } from "@prisma/client";

export interface IUser extends Omit<User, 'id' | 'createdAt' | 'updatedAt'> {}