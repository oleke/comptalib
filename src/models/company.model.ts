import {BelongsToMany, Table, Column, DataType, Model} from 'sequelize-typescript';
import { User, UserCompany } from '.'

@Table({
  timestamps: false
})
class Company extends Model {
  @Column({
    type:DataType.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  name: string;
  
  @BelongsToMany(() => User, () => UserCompany)
  users: User[]
}

export interface CreateCompanyInput{
  name: string;
}

export interface UpdateCompanyInput{
  name?: string;
}

export interface CompanyFiltersInput{
  id?: number;
  name?: string;
}

export { Company }