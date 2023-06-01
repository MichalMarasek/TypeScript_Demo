//it is possible to have variable which can have many types like
let multiTypeVariable;
multiTypeVariable = 10;
multiTypeVariable = "ten";
multiTypeVariable = true;
//enum example
export var Category;
(function (Category) {
    Category["OTHER"] = "other";
    Category["WORK"] = "work";
    Category["GYM"] = "gym";
    Category["HOBBY"] = "hobby";
})(Category || (Category = {}));
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
const logAge = (age) => {
    console.log(`You are ${age} years old`);
    if (typeof (age) === 'number') {
        let isOld;
        age > 20 ? isOld = true : isOld = false;
        let youAre;
        isOld ? youAre = 'old' : youAre = 'young';
        console.log('You are ' + youAre);
    }
};
logAge(27);
logAge('twenty-seven');
//arrays
let arrayOfStrings = ['String1', 'String2', 'String3'];
let arrayOfNumbers = [1, 2, 3];
let arrayOfNumbersAndStrings = [1, 2, 'String3'];
