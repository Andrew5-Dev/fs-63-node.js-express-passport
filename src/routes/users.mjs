import {Router} from 'express'
/*import {
    getUsersHandler,
    postUsersHandler,
    getUserByIdHandler,
    putUserByIdHandler,
    deleteUserByIdHandler,

} from '../controllers/users.mjs'*/
import {createUser, deleteUser, getUser, updateUser} from '../controllers/userControllers.mjs'
import {passportMiddlewarePost, passportMiddlewareGet, passportAuthenticated} from "../middlewares/passport.mjs";


import {validateParamsUserId, validateUserPost, validateUserPut} from '../validators/userValidator.mjs'
import validateUserInput from '../middlewares/validateUserInput.mjs'


const usersRouter = Router()

usersRouter
    .post('/',passportMiddlewarePost, createUser)
    .get('/', passportAuthenticated, getUser)
    .delete('/:id',passportMiddlewarePost, deleteUser)
    .put('/:id', passportMiddlewarePost, updateUser)

/*usersRouter.route('/')
  .get(getUsersHandler)
  .post(validateUserInput, validateUserPost,  postUsersHandler)

usersRouter
    .route('/:userId')
    .get(validateParamsUserId, getUserByIdHandler)
    .put(validateUserInput, validateParamsUserId, validateUserPut, putUserByIdHandler)
    .delete(validateParamsUserId, deleteUserByIdHandler)*/

export default usersRouter