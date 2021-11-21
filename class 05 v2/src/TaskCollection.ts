import { task } from "./task";

export class TaskCollection {
    private nextId: number = 1;
    private itemMap = new Map<number, task>();

    constructor(public tasks: task[] = []) {

    }

    public addTodo(Task: string): void {
        let item: task = new task(this.nextId, Task, false);
        // this.nextId = this.nextId + 1;
        this.nextId++;
        this.tasks.push(item);
        this.itemMap.set(this.nextId, new task(this.nextId, Task));
    }

    public printAll(): void {
        this.tasks.forEach((item: task) => item.printtask());
    }

    public taskDone(taskId: number){
    let item:task = this.tasks.find((item)=>item.taskId == taskId);
    item.done = true;
    }
    getTodoById(id: number): task{
    return this.itemMap.get(id);
    }
}