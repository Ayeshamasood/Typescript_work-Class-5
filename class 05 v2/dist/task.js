"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.task = void 0;
class task {
    constructor(taskId, task, done = true) {
        this.taskId = taskId;
        this.task = task;
        this.done = done;
    }
    printtask() {
        console.log(`The ID is: ${this.taskId}\n Task is: ${this.task}\n Completed: ${this.done}`);
    }
}
exports.task = task;
