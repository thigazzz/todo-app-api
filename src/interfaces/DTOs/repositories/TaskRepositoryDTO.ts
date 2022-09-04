import { ITask } from "../../../interfaces/models/ITask";

export interface TaskRepositoryCreateDTO {
    task: ITask;
}
export interface TaskRepositoryReadDTO {
    userId: number;
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
export interface TaskRepositoryIdDTO {
    id: number;
    userId: number
}