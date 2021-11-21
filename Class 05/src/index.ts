// console.clear()
// var message: string = ("Hello World new file");
// var numeric: number = 10;
// var floating_value: number = 10.3;
// var condition: boolean = true;
// var condition01: any = true;//not used in typescript

// console.log(message)
// console.log(numeric)
// console.log(floating_value)
// console.log(condition)
// console.log(condition01)

//let id: number;
//let student_name: string;
//let email: string;


//function declaration
//function calling
//function parameter
// function return type
//}

//function set_student_values(id : number, student_name: string, email: string): void {
//this.id = id;
//this.student_name = student_name;
//this.email = email;
//}

//function printStudent(): void {
//  console.log("The ID of student is " + this.id);
//console.log("The student nme  is this " + this.student_name);
//  console.log("student email"a + this.email)
//}

//set_student_values(1, "Ayesha", " ayeshamasood159@hotmail.com ");
//printStudent();


class student {
    id: number;
    student_name: string;
    email: string;
    active: boolean;

    constructor(id: number, student_name: string, email: string, active: boolean = true ) {
        this.id = id;
        this.student_name = student_name;
        this.email = email;
        this.active = active;
    }
    printStudent(): void {
        console.log("The ID of student is " + this.id);
        console.log("The student name  is this " + this.student_name);
        console.log("student email" + this.email);
        console.log("student active" + this.active);
    }

}

let student01 = new student(1, "Ayesha", "ayeshamasood159@hotmail.com" );
console.log(student01);
student01.printStudent();