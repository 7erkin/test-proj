import mockRequests from '../../fixtures/requests'
import mockCompanies from '../../fixtures/companies'
import mockSubdivisions from '../../fixtures/subdivisions'
import mockPositions from '../../fixtures/positions'
import mockCandidates from '../../fixtures/candidates'

const TIME_OUT = 500;

const getEntityNameById = (entities, id) => {
    const index = entities.findIndex(el => el.id == id);
    return index == -1 ? '' : entities[index].name;
}

class DummyStaffixService {
    constructor() {
        this._requests = mockRequests;
        this._companies = mockCompanies;
        this._subdivisions = mockSubdivisions;
        this._positions = mockPositions;
        this._candidates = mockCandidates;
    }

    addRequest(request) {
        // must be fixed
        return new Promise((resolve, reject) => {
            this._requests.push({
                id: Math.floor(Math.random() * 1000),
                number: Math.floor(Math.random() * 2000),
                agreements: 'not ok', 
                candidates: 0,
                company: getEntityNameById(this._companies, request.companyId),
                subdivision: getEntityNameById(this._subdivisions, request.subdivisionId),
                position: getEntityNameById(this._positions, request.positionId),
                dateCreate: request.dateCreate || '2019-10-20'
            })
            resolve();
        })
    }

    addCompany() {}

    getRequests() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this._requests);
            }, TIME_OUT);
        });
    }
    
    getRequestById(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const index = this._requests.findIndex(el => el.id == id);
                resolve(this._requests[index]);
            }, TIME_OUT);
        });
    }

    getCompanies() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this._companies);
            }, TIME_OUT)
        })
    }

    getSubdivisions(companyId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this._subdivisions.filter(el => el.companyId == companyId));
            }, TIME_OUT)
        })
    }

    getPositions(subdivisionId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this._positions.filter(el => el.subdivisionId == subdivisionId));
            }, TIME_OUT)
        })
    }

    getCandidates(requestId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this._candidates.filter(el => el.requestId == requestId));
            }, TIME_OUT)
        })
    }
}

export default DummyStaffixService;