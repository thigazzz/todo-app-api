import { ITask } from "../../interfaces/models/ITask";

export interface TaskRepositoryCreateDTO {
    userId: number;
    task: ITask;
}
export interface TaskRepositoryUpdateDTO {
    id: number;
    userId: number;
    task: ITask;
}
export interface TaskRepositoryDeleteDTO {
    id: number
    userId: number;
}