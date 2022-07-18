import request from 'supertest';
import server from '../server';

const TIMEOUT = 100000;

describe("Test HTTP requests", () => {
    test('Test POST request', async () => {
        let body = {id: 986, name: 'POST request'};

        let response = await request(server).post('/post-request').send(body);
        console.log(response.body);
        server.close();
    }, TIMEOUT);
});

