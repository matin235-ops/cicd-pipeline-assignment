const request = require('supertest');
const app = require('../src/app');

test('App should be defined', () => {
    expect(app).toBeDefined();
});

describe('GET /', () => {
    it('should respond with a 200 status code', async() => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    });

    it('should return a welcome message', async() => {
        const response = await request(app).get('/');
        expect(response.text).toContain('Welcome to the application!');
    });
});

// Additional tests can be added here for other routes and functionalities.