import { Stack } from './stack';
interface Command {
    name: string;
}
const undoStack = new Stack<Command>();
export const addRecord = (command: Command) => {
    undoStack.push(command);    
}

export const getUndoStack = () => {
    return undoStack;    
}