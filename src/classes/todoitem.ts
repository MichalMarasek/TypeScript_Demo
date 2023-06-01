import { Category } from "../types/types.js";

interface Logger {
    logCreationDate: (extraString: string) => void;
}

export class TodoItemClass implements Logger{
    name: string;
    isDone: boolean;
    category?: Category;
    private createdAt: Date;

    //category has default value set to general
    //this means we can use constructor with just first two values
    constructor(name: string, isdone: boolean, category: Category = Category.OTHER) {
        this.name = name;
        this.isDone = isdone;
        this.category = category;
        this.createdAt = new Date();
        console.log('new todo item constructor');
    }

    logCreationDate(extra: string) {
        console.log(`Todo item was created at ${this.createdAt} ${extra || ''}`);
    }

}
