import { it, expect, describe } from 'vitest';
import { addRecord, getUndoStack } from './record';


describe('record', () => {
  it('should pass', () => {
    const command = {
        name: 'a',
    }
    addRecord(command);
    expect(getUndoStack().size()).toBe(1);
    expect(getUndoStack().peek().name).toBe('a');
  });
});