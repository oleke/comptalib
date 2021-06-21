import { Company, CreateCompanyInput, UpdateCompanyInput, CompanyFiltersInput, User } from "../models";

class CompanyService {

    async createCompany(createCompanyInput: CreateCompanyInput ): Promise<Company> {
        return await Company.create(createCompanyInput)
    }

    async getCompanyById(id: number): Promise<Company> {
        return await Company.findByPk(id)
    }
    async getCompany(companyFiltersInput?: CompanyFiltersInput ): Promise<Company> {
        return await Company.findOne({ where: {...companyFiltersInput}, include: {model: User, as: 'users'} })
    }

    async getCompanies(companyFiltersInput?: CompanyFiltersInput): Promise<Company[]> {
        return await Company.findAll({ where: {...companyFiltersInput}})
    }

    async deleteCompany(id: number): Promise<number> {
        return await Company.destroy({where:{ id }})
    }

    async updateCompany(id: number, updateCompanyInput: UpdateCompanyInput ): Promise<[number,Company[]]> {
        return await Company.update({...updateCompanyInput},{ where: { id }} )
    }

    //TODO: Depending on need, implementation of egaer loading of users associated with a company

}

export { CompanyService }