import * as express from 'express'
import { CompanyService } from '../services';
import { CreateCompanyInput, UpdateCompanyInput, CompanyFiltersInput, Company, User } from '../models'
const router: express.Router = express.Router();
const companyService: CompanyService = new CompanyService()

// create user 
router.post('/create', async (req, res) => {
  const params: CreateCompanyInput = req.body
  const result: Company = await companyService.createCompany(params)
  if (result)
    res.status(201).json(result);
  else {
    res.status(500).send("Server encounterd an error");
  }
})

// update company 
router.put('/:companyId/update', async (req, res) => {
    const { companyId } = req.params
    const params: UpdateCompanyInput = req.body
    const result: [Number,Company[]] = await companyService.updateCompany(parseInt(companyId), params)
    if (result)
      res.status(200).json(result);
    else {
      res.status(500).send("Server encounterd an error");
    }
})

// find company 
router.get('/:companyId', async (req, res) => {
    const { companyId } = req.params
    const result: Company = await companyService.getCompanyById(parseInt(companyId))
    if (result)
      res.status(200).json(result);
    else {
        res.status(404).send("Company not found");
    }
})

// find company users
router.get('/:companyId/users', async (req, res) => {
    const { companyId } = req.params
    const result: Company = await companyService.getCompany({id: parseInt(companyId)})
    const companies: User[] = result.users
    res.status(200).json(companies);
})

// find all companies
router.get('/all', async (req, res) => {
    const result: Company[] = await companyService.getCompanies()
    if (result)
      res.status(200).json(result);
    else {
      res.status(500).send("Server encounterd an error");
    }
})

// delete user 
router.delete('/:companyId/delete', async (req, res) => {
    const { companyId } = req.params
    const result: number = await companyService.deleteCompany(parseInt(companyId))
    if (result)
      res.status(200).json(result);
    else {
      res.status(500).send("Server encounterd an error");
    }
})

export const companyRoute = router