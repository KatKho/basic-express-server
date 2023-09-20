const validatorMiddleware = require('./validator.js');

describe('Testing the validator middleware', () => {
  test('Should call the next function if name is provided in the query string', () => {
    const req = {
      query: {
        name: 'Kat'
      }
    };
    const res = {};
    const next = jest.fn();

    validatorMiddleware(req, res, next);

    expect(next).toHaveBeenCalled();
  });

  test('Should call next with an error if name is missing in the query string', () => {
    const req = {
      query: {}
    };
    const res = {};
    const next = jest.fn();

    validatorMiddleware(req, res, next);

    expect(next).toHaveBeenCalledWith(new Error('Name is missing'));
  });
});
