import { User, CreateUserInput, UpdateUserInput, UserFiltersInput, Company } from "../models";

class UserService {

    async createUser(createUserInput: CreateUserInput ): Promise<User> {
        return await User.create(createUserInput)
    }

    async getUserById(id: number): Promise<User> {
        return await User.findByPk(id)
    }
    async getUser(userFiltersInput?: UserFiltersInput ): Promise<User> {
        return await User.findOne({ where: {...userFiltersInput}, include: { model: Company, as: 'companies' } })
    }

    async getUsers(userFiltersInput?: UserFiltersInput): Promise<User[]> {
        return await User.findAll({ where: {...userFiltersInput}})
    }

    async deleteUser(id: number): Promise<number> {
        return await User.destroy({where:{ id }})
    }

    async updateUser(id: number, updateUserInput: UpdateUserInput ): Promise<[number,User[]]> {
        return await User.update({...updateUserInput},{ where: { id }} )
    }

    //TODO: Depending on need, implementation of separate egaer loading of companies associated with a user

}

export { UserService }