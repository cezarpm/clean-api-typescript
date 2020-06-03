import { Router } from 'express'
import { makeSignupController } from '../factories/signup'
import { adaptRoute } from '../adapter/express-route-adpter'

export default (router: Router): void => {
  router.post('/signup', adaptRoute(makeSignupController()))
}
