const { update, MSGS } = require('./update');

describe('update function', () => {
  test('should increase model by 1', () => {
    const model = 0;
    const newModel = update(MSGS.ADD, model);
    expect(newModel).toBe(1);
  });

  test('should decrease model by 1', () => {
    const model = 0;
    const newModel = update(MSGS.SUBTRACT, model);
    expect(newModel).toBe(-1);
  });

  test('should return same model for unknown message', () => {
    const model = 0;
    const newModel = update('UNKNOWN', model);
    expect(newModel).toBe(model);
  });
});
