//creating interface
//category is an OPTIONAL PROPERTY
//objects CAN have category, but it is not mandatory
//category has LITERAL type
export interface TodoItemInterface {
    name: string;
    isDone: boolean;
    category?: Category;
}

//it is possible to have variable which can have many types like
let multiTypeVariable: number | string | boolean;
multiTypeVariable = 10;
multiTypeVariable = "ten";
multiTypeVariable = true;
// multiTypeVariable = [] //will not work as we did not mention array type

//type aliasing
//we are creating our own type
//in this example our type can have different string value
export type TypeCategory = 'other' | 'work' | 'gym' | 'hobby';


//enum example
export enum Category {
    OTHER = 'other',
    WORK = 'work',
    GYM = 'gym',
    HOBBY = 'hobby',
}

//touple
export type TodoitemTouple = [string, Category, boolean]; 

//touple usage example, remember order is important in touple
// const todoitem: TodoitemTouple = ['Read book', Category.HOBBY, true];
// const todoitemName = todoitem[0];
// const todoitemCategory = todoitem[1];
// const todoitemIsDoneStatus = todoitem[2];
// addTask(new TodoItem(todoitemName, todoitemIsDoneStatus, todoitemCategory));


//object
const TodoItemObject = {
    name: 'Play on PC',
    isDone: false,
    category: Category,
};

//union types - single variable can have multiple types
//it is possible to have variables with parameters which could be of multiple types eg number or string
//in example below variable age can be of type number or string
const logAge = (age: number | string) => {   
    console.log(`You are ${age} years old`);
    if(typeof(age) === 'number') {
        let isOld: boolean;
        age > 20 ?  isOld = true : isOld = false;
        let youAre : string;
        isOld ? youAre = 'old' : youAre = 'young';
        console.log('You are ' + youAre);
    }

};

logAge(27);
logAge('twenty-seven');

//arrays
let arrayOfStrings: string[] = ['String1', 'String2', 'String3'];
let arrayOfNumbers: number[] = [1, 2, 3];
let arrayOfNumbersAndStrings: (number | string)[] = [1, 2, 'String3'];