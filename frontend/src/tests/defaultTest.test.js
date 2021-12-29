import { trueReturn, falseReturn } from './testFunction';

describe('testFunctions', () => {
  it('should return true when trueReturn is ran', () => {
    expect(trueReturn()).toBe(true);
  });

  it('should return false when falseReturn is ran', () => {
    expect(falseReturn()).toBe(false);
  });
});
