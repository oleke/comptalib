import * as express from 'express'
import { UserService } from '../services/user.service';
import { Company, CreateUserInput, UpdateUserInput, User } from '../models'

const router: express.Router = express.Router();
const userService: UserService = new UserService()

// create user 
router.post('/create', async (req, res) => {
  const params: CreateUserInput = req.body
  const result: User = await userService.createUser(params)
  if (result)
    res.status(201).json(result);
  else {
    res.status(500).send("Server encounterd an error");
  }
})

// update user 
router.put('/:userId/update', async (req, res) => {
    const { userId } = req.params
    const params: UpdateUserInput = req.body
    const result: [Number,User[]] = await userService.updateUser(parseInt(userId), params)
    if (result)
      res.status(200).json(result);
    else {
      res.status(500).send("Server encounterd an error");
    }
})

// find user 
router.get('/:userId', async (req, res) => {
    const { userId } = req.params
    const result: User = await userService.getUserById(parseInt(userId))
    if (result)
      res.status(200).json(result);
    else {
      res.status(404).send("User not found");
    }
})

// find user companies
router.get('/:userId/companies', async (req, res) => {
    const { userId } = req.params
    const result: User = await userService.getUser({id: parseInt(userId)})
    const companies: Company[] = result.companies
    res.status(200).json(companies);
})

// find all users
router.get('/all', async (req, res) => {
    const result: User[] = await userService.getUsers()
    if (result)
      res.status(200).json(result);
    else {
      res.status(500).send("Server encounterd an error");
    }
})

// delete user 
router.delete('/:userId/delete', async (req, res) => {
    const { userId } = req.params
    const result: number = await userService.deleteUser(parseInt(userId))
    if (result)
      res.status(200).json(result);
    else {
      res.status(500).send("Server encounterd an error");
    }
})

export const userRoute = router