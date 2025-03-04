import type { U } from "vitest/dist/chunks/environment.d8YfPkTm.js";
import { reactive } from "vue";

//  push, pop, peek, size
class Stack<T> {
    private items: T[] = [];  // 1. items is an array of T

    constructor() {
        this.items = reactive([]);
     }

    push(item: T) {
      this.items.push(item);  // 2. push item to items
    }
    pop(): T | undefined {
      return this.items.pop();  // 3. pop item from items
    }
    peek(): T {
      return this.items[this.items.length - 1];  // 4. get the last item from items
    }
    size(): number {
      return this.items.length;  // 5. get the length of items
    }
    isEmpty(): boolean {
        return this.items.length === 0;  // 6. check if items is empty
    }

    map<U>(callback: (value: T,index:number) => U) {
        return this.items.map(callback);
    }
}
export { Stack };
