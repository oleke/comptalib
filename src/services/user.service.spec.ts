

import { expect } from 'chai';
import { before } from 'mocha';
import { stub, spy, mock } from 'sinon';
import { UserService } from '.';
import { User, CreateUserInput } from "../models";

describe("UserService", () => {
  describe('constructor', () => {
    it('it should instantiate a UserService', () => {
      const userService = new UserService()
      expect(userService).instanceOf(UserService)
    })
  })

  let userService = new UserService()
  describe('CRUD', () => {
    describe('create user', () => {
      it('should create a new user', async () => {
        const ID = 1
        const FIRSTNAME = 'John'
        const LASTNAME = 'Smith'

        const USERDATA = { 
            id: ID,
            firstName: FIRSTNAME,
            lastName: LASTNAME 
        }

        mock(User).expects('create').resolves(USERDATA)
        
        const inputData: CreateUserInput = {
          firstName: 'John',
          lastName: 'Smith'
        }
        const spyCreateUser = spy(userService,'createUser')
        const result = await userService.createUser(inputData)
        expect(spyCreateUser.calledOnce).to.be.true
        expect(spyCreateUser.getCall(0).args.length).to.be.equal(1)
        expect(spyCreateUser.getCall(0).args[0]).to.be.equals(inputData)
        expect(result).to.be.equals(USERDATA)
      })
    })

    describe('find user', () => {
        it('should find a new user given the ID', async () => {
            const ID = 1
            const FIRSTNAME = 'John'
            const LASTNAME = 'Smith'
    
            const USERDATA = { 
                id: ID,
                firstName: FIRSTNAME,
                lastName: LASTNAME 
            }
    
            mock(User).expects('findByPk').resolves(USERDATA)
            
            const spyGetUser = spy(userService,'getUserById')
            const result = await userService.getUserById(ID)
            expect(spyGetUser.calledOnce).to.be.true
            expect(spyGetUser.getCall(0).args.length).to.be.equal(1)
            expect(spyGetUser.getCall(0).args[0]).to.be.equals(ID)
            expect(result).to.be.equals(USERDATA)
          })
    })
  })
})
