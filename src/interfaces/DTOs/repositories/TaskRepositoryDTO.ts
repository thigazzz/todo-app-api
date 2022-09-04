import { ITask } from "../../../interfaces/models/ITask";

export interface TaskRepositoryCreateDTO {
    task: ITask;
}
export interface TaskRepositoryReadDTO {
    id: number;
}
export interface TaskRepositoryUpdateDTO {
    id: number;
    task: ITask;
}
export interface TaskRepositoryDeleteDTO {
    id: number
}
export interface TaskRepositoryIdDTO {
    id: number;
}