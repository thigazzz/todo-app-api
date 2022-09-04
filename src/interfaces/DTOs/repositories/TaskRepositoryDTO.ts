import { ITask } from "../../../interfaces/models/ITask";

export interface TaskRepositoryCreateDTO {
    task: ITask;
}
export interface TaskRepositoryReadDTO {
    id: number;
}
export interface TaskRepositoryUpdateDTO {
    id: number;
    task: Omit<ITask, 'userId'>;
}
export interface TaskRepositoryDeleteDTO {
    id: number
}
export interface TaskRepositoryIdDTO {
    id: number;
}