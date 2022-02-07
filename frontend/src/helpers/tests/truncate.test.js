import truncate from '../truncate';

describe('truncate function for titles and descriptions', () => {
  it('should truncate a string to a certain number of characters', () => {
    expect(truncate('hello world', 5)).toEqual('hello...');
  });
  it('should not truncate a string if it is shorter than the number of characters', () => {
    expect(truncate('hello world', 100)).toEqual('hello world');
  });
});
