import {Router} from 'express'
import {
  getLoginHandler,
  postLoginHandler,
} from '../controllers/login.mjs'
import passport from "passport";
import {errors} from "celebrate";
import {passportMiddlewarePost, passportMiddlewareGet} from "../middlewares/passport.mjs";
const loginRouter = Router()


/*loginRouter.post(
  '/',
  passport.authenticate('local', {
    failureFlash: true
  }),
  (req, res) => {
    res.redirect('/protected')
  }
)*/

/*loginRouter.get('/', (req, res) => {
  if (req.isAuthenticated()) {
    res.redirect('/protected')
  } else {
    res.render('login')
  }
})*/

loginRouter
  .route('/')
  .get(passportMiddlewareGet)
  .post(passportMiddlewarePost)


export default loginRouter