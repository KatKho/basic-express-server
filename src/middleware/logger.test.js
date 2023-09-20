const logger = require('./logger.js');

describe('Testing the logger module', () => {
  test('Gets information about the request path, method, and query, and calls the next function', () => {

    console.log = jest.fn();

    const req = {
      method: 'TEST',
      path: 'TEST'
    };
    const res = {};
    const next = jest.fn(); 

    logger(req, res, next);

    expect(next).toHaveBeenCalled();
  });
});