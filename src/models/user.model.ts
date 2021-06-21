import { Optional } from 'sequelize'
import {BelongsToMany, Table, Column, DataType, Model} from 'sequelize-typescript';
import { Company, UserCompany } from '.'


// These are all the attributes in the User model
interface UserAttributes {
  id: number;
  firstName: string;
  lastName?: string | null;
}

// Some attributes are optional in `User.build` and `User.create` calls
interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

@Table({
  timestamps: false
})
class User extends Model<UserAttributes,UserCreationAttributes>{
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
  firstName: string;

  @Column(DataType.STRING)
  lastName?: string | null;

  @BelongsToMany(() => Company, () => UserCompany)
  companies?: Company[]
}


export interface CreateUserInput{
  firstName: string;
  lastName?: string;
}

export interface UpdateUserInput{
  firstName?: string;
  lastName?: string;
}

export interface UserFiltersInput{
  id?: number;
  firstName?: string;
  lastName?: string;
}
export { User }