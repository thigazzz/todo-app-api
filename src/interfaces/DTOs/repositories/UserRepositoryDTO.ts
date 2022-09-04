import { IUser } from "../../../interfaces/models/IUser";

export interface UserRepositoryCreateDTO {
    user: IUser;
}
export interface UserRepositoryUpdateDTO {
    id: number;
    user: IUser;
}
export interface UserRepositoryDeleteDTO {
    id: number
}
export interface UserRepositoryFindByEmailDTO {
    email: string
}
