const supertest = require('supertest');
const { app } = require('../src/server');
const request = supertest(app);

describe('Testing the server module', () => {
  test('Should return a 404 status code on a bad route', async () => {
    const response = await request.get('/invalid-route');
    expect(response.status).toEqual(404);
  });

  test('Should return a 404 status code on a bad method (POST)', async () => {
    const response = await request.post('/person');
    expect(response.status).toEqual(404);
  });

  test('should return a 404 status code on a bad method (PUT)', async () => {
    const response = await request.put('/person'); 
    expect(response.status).toBe(404);
  });
  
  test('should return a 404 status code on a bad method (DELETE)', async () => {
    const response = await request.delete('/person'); 
    expect(response.status).toBe(404);
  });

  test('Should return a 500 status code if no name in the query string', async () => {
    const response = await request.get('/person');
    expect(response.status).toEqual(500);
  });

  test('Should return a 200 status code if the name is in the query string', async () => {
    const response = await request.get('/person?name=Kat');
    expect(response.status).toEqual(200);
  });

  test('Should return the correct JSON object with the name in the query string', async () => {
    const response = await request.get('/person?name=Kat');
    const expectedResponse = { name: 'Kat' };
    expect(response.status).toEqual(200);
    expect(response.body).toEqual(expectedResponse);
  });
});
