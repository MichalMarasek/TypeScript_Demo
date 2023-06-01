import { Category } from "../types/types.js";
export class TaskClass {
    //category has default value set to general
    //this means we can use constructor with just first two values
    constructor(name, done, category = Category.GENERAL) {
        this.name = name;
        this.done = done;
        this.category = category;
        this.createdAt = new Date();
        console.log('constructor!');
    }
    logCreationDate(extra) {
        console.log(`Task was created at ${this.createdAt} ${extra || ''}`);
    }
}
