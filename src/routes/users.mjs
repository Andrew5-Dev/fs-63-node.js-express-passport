import {Router} from 'express'
/*import {
    getUsersHandler,
    postUsersHandler,
    getUserByIdHandler,
    putUserByIdHandler,
    deleteUserByIdHandler,

} from '../controllers/users.mjs'*/
import {createUser, deleteUser, getUser, updateUser} from '../controllers/userControllers.mjs'

import {validateParamsUserId, validateUserPost, validateUserPut} from '../validators/userValidator.mjs'
import validateUserInput from '../middlewares/validateUserInput.mjs'


const usersRouter = Router()

usersRouter
    .post('/', createUser)
    .get('/', getUser)
    .delete('/:id', deleteUser)
    .put('/:id', updateUser)

/*usersRouter.route('/')
  .get(getUsersHandler)
  .post(validateUserInput, validateUserPost,  postUsersHandler)

usersRouter
    .route('/:userId')
    .get(validateParamsUserId, getUserByIdHandler)
    .put(validateUserInput, validateParamsUserId, validateUserPut, putUserByIdHandler)
    .delete(validateParamsUserId, deleteUserByIdHandler)*/

export default usersRouter