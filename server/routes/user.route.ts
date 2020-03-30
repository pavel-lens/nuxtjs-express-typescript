import express, { Request, Response, NextFunction } from 'express'
// import UserService from '../services/user.service'
import { Container } from 'typedi'
import { UserService } from '../services/user.service'

const router = express.Router()

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    // const userService = Container.get<UserService>('UserService')
    const userService: UserService = Container.get('UserService')
    const users = await userService.getAllUsers()

    res.send(users)
  } catch (err) {
    next(err)
  }
})

export default router
