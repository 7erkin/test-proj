import mockIndicators from '../fixtures/indicators';
import mockCompanies from '../fixtures/companies';

const getIndicatorsByIndicatorGroupId = (indicatorGroups, id) => {
    const index = indicatorGroups.findIndex(group => group.id == id);
    return indicatorGroups[index].indicators;
}

const getIndicatorGroups = (indicatorGroups) => {
    return indicatorGroups.map(group => {
        return {
            id: group.id,
            name: group.name
        }
    })
}

const getIndicatorsByPattern = (indicatorGroups, indicatorGroupId, pattern) => {
    const indicators = getIndicatorsByIndicatorGroupId(indicatorGroups, indicatorGroupId);
    return indicators.filter(el => el.name.indexOf(pattern) !== -1); 
}

const removeIndicators = (indicatorGroups, indicatorGroupId, indicatorIds) => {
    const indicatorGroupIndex = indicatorGroups.findIndex(el => el.id == indicatorGroupId);
    const indicators = indicatorGroups[indicatorGroupIndex].indicators.filter(el1 => {
        return !indicatorIds.some(el2 => el2 == el1.id);
    });
    indicatorGroups[indicatorGroupIndex].indicators = indicators;
}

const TIME_OUT = 1500;

class DummyStaffixService {
    constructor() {
        this._indicators = mockIndicators;
        this._companies = mockCompanies;
    }

    async getIndicators(indicatorGroupId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(getIndicatorsByIndicatorGroupId(this._indicators, indicatorGroupId));
            }, TIME_OUT)
        });
    }

    async isIndicatorExist(indicatorName){
    }

    async getIndicatorsByPattern(indicatorGroupId, indicatorNamePattern){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(getIndicatorsByPattern(this._indicators, indicatorGroupId, indicatorNamePattern));
            }, TIME_OUT)
        });
    }

    async getIndicatorGroups() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(getIndicatorGroups(this._indicators));
            }, TIME_OUT)
        });
    }

    async deleteIndicators(indicatorGroupId, indicatorIds) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                removeIndicators(this._indicators, indicatorGroupId, indicatorIds);
                resolve('ok');
            }, TIME_OUT);
        });
    }

    async deleteIndicatorGroups(indicatorGroupIds) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this._indicators = this._indicators.filter(group => !indicatorGroupIds.includes(group.id));
                resolve('ok');
            }, TIME_OUT);
        });
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

    async updateIndicator(indicator) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexGroup = this._indicators.findIndex(el => el.id == indicator.groupId);
                const indexIndicator = this._indicators[indexGroup].indicators.findIndex(el => el.id == indicator.id);
                this._indicators.splice(indexIndicator, 1);
                this._indicators.push({
                    id: indicator.id,
                    name: indicator.name
                });
                resolve("ok");
            }, TIME_OUT);
        });
    }

    async createIndicator(indicator) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexGroup = this._indicators.findIndex(el => el.id == indicator.groupId);
                this._indicators[indexGroup].indicators.push({
                    id: Math.floor(Math.random() * 1000),
                    name: indicator.name,
                    description: indicator.description
                });
                resolve("ok");
            }, TIME_OUT);
        });
    }

    async updateIndicatorGroup(indicatorGroup) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const index = this._indicators.findIndex(el => el.id == indicatorGroup.id);
                const indicators = this._companies[index].indicators;
                this._indicators.splice(index, 1);
                this._indicators.push({
                    id: indicatorGroup.id,
                    name: indicatorGroup.name,
                    description: indicatorGroup.description,
                    indicators
                });
                resolve("ok");
            }, TIME_OUT);
        });
    }

    async createIndicatorGroup(indicatorGroup) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this._indicators.push({
                    id: Math.floor(Math.random() * 1000),
                    name: indicatorGroup.name,
                    description: indicatorGroup.description,
                    indicators: []
                });
                resolve("ok");
            }, TIME_OUT);
        });
    }
}

export default DummyStaffixService;