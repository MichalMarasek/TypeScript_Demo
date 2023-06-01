import { Category } from "../types/types.js";
export class TodoItemClass {
    //category has default value set to general
    //this means we can use constructor with just first two values
    constructor(name, isdone, category = Category.OTHER) {
        this.name = name;
        this.isDone = isdone;
        this.category = category;
        this.createdAt = new Date();
        console.log('new todo item constructor');
    }
    logCreationDate(extra) {
        console.log(`Todo item was created at ${this.createdAt} ${extra || ''}`);
    }
}
