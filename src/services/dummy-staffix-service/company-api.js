import mockCompanies from '../../fixtures/companies'

import TIME_OUT from './timeout'

class CompanyAPI {
    constructor() {
        this._companies = mockCompanies;
    }

    async getCompanyList() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const res = this._companies.map(el => {
                    return {
                        id: el.id,
                        name: el.name
                    }
                });
                resolve(res);
            }, TIME_OUT);
        });
    }

    async getAnyCompanies() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this._companies);
            }, TIME_OUT);
        });
    }

    async getCompany(companyId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const index = this._companies.findIndex(el => el.id == companyId);
                resolve(this._companies[index]);
            }, TIME_OUT);
        });
    }

    async createCompany(company){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                company.id = Math.floor(Math.random() * 1000);
                company.subdivisions.forEach(el => el.id = Math.floor(Math.random() * 1000));
                this._companies.push(company);
                resolve("ok");
            }, TIME_OUT);
        });
    }

    async updateCompany(company) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const index = this._companies.findIndex(el => el.id == company.id);
                company.newSubdivisions.forEach(el => el.id = Math.floor(Math.random() * 2000));
                const oldCompany = this._companies[index];
                this._companies.push({
                    id: company.id,
                    name: company.name,
                    description: company.description,
                    subdivisions: [...company.newSubdivisions, ...oldCompany.subdivisions]
                });
                this._companies.splice(index, 1);
                resolve("ok");
            }, TIME_OUT);
        });
    }

    async deletePointedSubdivisions(companyId, subdivisionIds) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const index = this._companies.findIndex(el => el.id == companyId);
                const newSubdivisions = this._companies[index].subdivisions.filter(el1 => !subdivisionIds.some(el2 => el2 == el1.id));
                this._companies[index].subdivisions = newSubdivisions;
                resolve("ok");
            }, TIME_OUT);
        });
    }
}

export default CompanyAPI;