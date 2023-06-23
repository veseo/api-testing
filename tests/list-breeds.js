const request = require('supertest');

describe('Test Mimi', () => {
  it('responds with expected JSON structure', async () => {
    await request('https://dog.ceo')
      .get('/api/breeds/list/all')
      .expect(200)
      .expect('Content-Type', 'application/json')
      .expect(({ body }) => {
        console.log(body);
      })
  });

  it('should have at least two types of base breeds', async () => {});
  it('should have exactly three types of bulldog', async () => {});
  it('should have at least two types of mastiff', async () => {});
  it('should have a `yorkshire` type of terrier', async () => {});
})
