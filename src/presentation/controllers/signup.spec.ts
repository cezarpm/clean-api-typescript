import { SignUpController } from './signup'

describe('Signup Controller', () => {
  test('Should return 400 if no name provided', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        email: 'any_email@gmail.com',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })
})