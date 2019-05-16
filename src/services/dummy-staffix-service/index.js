import mockRequests from '../../fixtures/requests'
import mockCompanies from '../../fixtures/companies'
import mockSubdivisions from '../../fixtures/subdivisions'
import mockPositions from '../../fixtures/positions'
import mockCandidates from '../../fixtures/candidates'
import mockGroupsIndicator from '../../fixtures/groups-indicator'
import mockGroupsCompetence from '../../fixtures/groups-competence'
import mockIndicators from '../../fixtures/indicators'
import mockCompetencies from '../../fixtures/competencies'

import {
    ifReduxStoreInLocalStorage,
    getReduxStoreFromLocalStorage
} from '../../libs/redux-store-loader'

const TIME_OUT = 500;

const getEntityNameById = (entities, id) => {
    const index = entities.findIndex(el => el.id == id);
    return index == -1 ? '' : entities[index].name;
}

class DummyStaffixService {
    constructor() {
        if(ifReduxStoreInLocalStorage()){
            const {companies, requests} = getReduxStoreFromLocalStorage();
            this._companies = companies;
            this._requests = requests;
        } else {
            this._requests = mockRequests;
            this._companies = mockCompanies;
        }

        this._subdivisions = mockSubdivisions;
        this._positions = mockPositions;
        this._candidates = mockCandidates;

        this._groupsIndicator = mockGroupsIndicator;
        this._groupsCompetence = mockGroupsCompetence;
        this._groupsQuestion = [];
        this._indicators = mockIndicators;
        this._competencies = mockCompetencies;
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

    addCompany(company) {
        return new Promise((resolve, reject) => {
            this._companies.push({
                id: Math.floor(Math.random() * 1000),
                ...company,
                requests: 0
            })
            resolve();
        })
    }

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

    getCompetenceGroups() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this._groupsCompetence);
            }, TIME_OUT)
        })
    }

    getIndicatorGroups() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this._groupsIndicator);
            }, TIME_OUT)
        })
    }

    getQuestionGroups() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this._groupsQuestion);
            }, TIME_OUT)
        })
    }
}

export default DummyStaffixService;