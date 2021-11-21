"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var message = "Hello World!";
console.log(message);
const TaskCollection_1 = require("./TaskCollection");
let task01 = new TaskCollection_1.TaskCollection();
task01.addTodo("Aam ley Aoo");
task01.addTodo("Battery Terminal Ley Aoo");
task01.printAll();
task01.taskDone(2);
task01.printAll();
task01.addTodo("Dahi Lee Aaoo");
task01.addTodo("Tikka masala Lee Aaoo");
task01.getTodoById(id, number);
{
}
