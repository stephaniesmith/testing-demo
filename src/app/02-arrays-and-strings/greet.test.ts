import { greet } from './greet';

describe('greet', () => {
  it('should include the name message', () => {
    expect(greet('steph')).toContain('steph');
  });
});
