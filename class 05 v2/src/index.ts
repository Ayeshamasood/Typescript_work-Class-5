var message:string = "Hello World!"
console.log(message)

import {task} from "./Task";
import { TaskCollection } from "./TaskCollection";

let task01 : TaskCollection = new TaskCollection();
task01.addTodo("Aam ley Aoo");
task01.addTodo("Battery Terminal Ley Aoo");
task01.printAll();

task01.taskDone(2);
task01.printAll();

task01.addTodo("Dahi Lee Aaoo");
task01.addTodo("Tikka masala Lee Aaoo");
task01.getTodoById(3);



