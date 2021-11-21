"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskCollection = void 0;
const task_1 = require("./task");
class TaskCollection {
    constructor(tasks = []) {
        this.tasks = tasks;
        this.nextId = 1;
        this.itemMap = new Map();
    }
    addTodo(Task) {
        let item = new task_1.task(this.nextId, Task, false);
        // this.nextId = this.nextId + 1;
        this.nextId++;
        this.tasks.push(item);
        this.itemMap.set(this.nextId, new task_1.task(this.nextId, Task));
    }
    printAll() {
        this.tasks.forEach((item) => item.printtask());
    }
}
exports.TaskCollection = TaskCollection;
taskDone(taskId, number);
{
    let item = this.tasks.find(item => item.taskid == taskId);
    item.done = true;
}
getTodoById(id, number);
{
    return this.itemMap.get(id);
}
