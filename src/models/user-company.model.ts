import {BelongsToMany, ForeignKey, Table, Column, DataType, Model} from 'sequelize-typescript';
import { sequelize } from '../db'
import { Company, User } from '.'

@Table({
  timestamps: false
})
class UserCompany extends Model {
  @ForeignKey(() => User)
  @Column
  userId: number

  @ForeignKey(() => Company)
  @Column
  companyId: number
}

export { UserCompany }