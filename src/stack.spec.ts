import { it, expect, describe } from 'vitest';
import { Stack } from './stack';


describe('stack', () => {
  it('should push', () => {
    const stack = new Stack();
    stack.push('a');
    expect(stack.size()).toBe(1);
    expect(stack.peek()).toBe('a');
  });

  it('map', () => {
    const stack = new Stack();
    stack.push('a');
    stack.push('b');

    const result = stack.map((val) => {
        return val;
    });

    expect(result).toEqual(['a', 'b']);
    // expect(stack.size()).toBe(0);
  }
  );
});