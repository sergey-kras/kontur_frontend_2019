import { ICommand } from "../intefaces/ICommand";
import { ITodoObject } from "../intefaces/ITodoObject";
import { PipeFormat } from "../helpers/PipeFormat";
import { PipeParse } from "../helpers/pipeParse";
import { SortHelper } from "../helpers/sortHelper";

export class Important implements ICommand {
    constructor() {
        this.pipeFormat = new PipeFormat();
    }

    todoCollection: ITodoObject[] = [];
    pipeFormat: PipeFormat;

    public sort(): void {
        this.todoCollection = SortHelper.onlyImportant(this.todoCollection);
        this.todoCollection = PipeParse.datePattern(this.todoCollection);
        this.todoCollection = PipeParse.importantPattern(this.todoCollection);
        this.todoCollection = PipeParse.userPattern(this.todoCollection);
    }

    public show(): void {
        console.log(this.pipeFormat.getValidList(this.todoCollection));
    }

    public set(todoCollection: ITodoObject[]): void {
        this.todoCollection = todoCollection;
    }
}