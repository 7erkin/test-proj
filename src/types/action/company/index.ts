import IAction from "../index";
import { CompanyStore, Company } from "../../company-page";

export interface ICreateCompany extends IAction {
    payload: {
        company: Company
    }
}

// when some text fields has been changed and pressed button Save (also user can create new subdivisions and they applied to company after pressing button Save)
export interface IUpdateCompany extends IAction {
    payload: {
        company: Company
    }
}

export interface IDeleteSubdivisions extends IAction {
    payload: {
        subdivisionIds: Array<number>,
        companyId: number
    }
}

// such action isn't defined yet
export interface IDeleteCompany extends IAction {}

export interface ISaveLoadedCompanies extends IAction {
    payload: {
        companyStore: CompanyStore
    }
}