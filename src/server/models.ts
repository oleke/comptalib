import { User, Company, UserCompany } from '../models'
import { Sequelize } from 'sequelize-typescript'

class ModelLoader{
    static loadModels(sequelize: Sequelize): void {
        sequelize.addModels([User, Company, UserCompany])
    }
}

export { ModelLoader }