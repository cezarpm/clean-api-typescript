import request from 'supertest'
import app from '../config/app'

describe('Signup Routes', () => {
  test('Should retun an account on success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Cezar',
        email: 'cezar_pm@hotmail.com',
        password: '123',
        passwordConfirmation: '123'
      })
      .expect(200)
  })
})
