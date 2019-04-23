import mockPositions from '../../fixtures/positions';
import mockCompanies from '../../fixtures/companies'

import TIME_OUT from './timeout'

class PositionAPI {
    constructor(){
        this._positions = mockPositions;
        this._companies = mockCompanies;
    }

    async getSubdivisionsByCompanyId(companyId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexCompany = this._companies.findIndex(el => el.id == companyId);
                resolve(this._companies[indexCompany].subdivisions);
            }, TIME_OUT);
        })
    }

    async getRandomPositions() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const positions = this._positions.map(el => {
                    const {
                        id,
                        name,
                        description,
                        dateCreate,
                        dateApproval
                    } = el;

                    return {
                        id,
                        name,
                        description,
                        dateCreate,
                        dateApproval
                    }
                })

                resolve(positions);
            }, TIME_OUT)
        })
    }

    async getPositionsByCompanyId(companyId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const positions = this._positions.filter(el => el.companyId == companyId);
                resolve(positions);
            }, TIME_OUT);
        })
    }

    async getPositionBySubdivisionId(companyId, subdivisionId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const positions = this._positions.filter(el => (el.companyId == companyId) && (el.subdivisionId == subdivisionId));
                resolve(positions);
            }, TIME_OUT);
        })
    }
}

export default PositionAPI; 