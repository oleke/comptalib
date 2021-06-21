import { Sequelize } from 'sequelize-typescript'
import { dbConfig } from '../config'

const sequelize = new Sequelize({
    database: dbConfig.DB,
    dialect: 'mysql',
    username: dbConfig.USER,
    password: dbConfig.PASSWORD
  })

export { sequelize }
