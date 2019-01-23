import { ITodoObject } from "./ITodoObject";
import { PipeFormat } from "../helpers/PipeFormat";
import { IrowSetting } from "./IrowSetting";

export interface ICommand {
    todoCollection?: Array<ITodoObject>;
    sort(type?: string): void;
    show(): void;
    set(todoCollection: ITodoObject[]): void;
    pipeFormat: PipeFormat;
}