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
        if(false){
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

    addCompany = (company) => {
        return new Promise((resolve, reject) => {
            this._companies.push({
                id: Math.floor(Math.random() * 1000),
                ...company,
                requests: 0
            })
            resolve();
        })
    }

    getRequests = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this._requests);
            }, TIME_OUT);
        });
    }
    
    getRequestById = (id) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const index = this._requests.findIndex(el => el.id == id);
                resolve(this._requests[index]);
            }, TIME_OUT);
        });
    }

    getCompanies = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this._companies);
            }, TIME_OUT)
        })
    }

    getSubdivisions = (companyId) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this._subdivisions.filter(el => el.companyId == companyId));
            }, TIME_OUT)
        })
    }

    getPositions = (subdivisionId) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this._positions.filter(el => el.subdivisionId == subdivisionId));
            }, TIME_OUT)
        })
    }

    getCandidates = (requestId) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this._candidates.filter(el => el.requestId == requestId));
            }, TIME_OUT)
        })
    }

    getGroupsIndicators = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this._groupsIndicator);
            }, TIME_OUT)
        })
    }

    getGroupsQuestions = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this._groupsQuestion);
            }, TIME_OUT)
        })
    }

    getIndicators = (groupIndicatorId) => {
        console.log(this._indicators.filter(el => Number(groupIndicatorId) === el.idGroup))
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this._indicators.filter(el => Number(groupIndicatorId) === el.idGroup));
            }, TIME_OUT)
        })
    }

    // ============= CRUD =============
    createCompetence = (competence) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this._competencies.push({
                    id: Math.floor(Math.random() * 100),
                    ...competence
                });
                console.log(this._competencies)
                resolve();
            }, TIME_OUT);
        })
    }

    updateCompetence = (competence) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const index = this._competencies.findIndex(({id}) => id == competence.id);
                this._competencies[index] = {
                    ...competence
                };
                resolve();
            }, TIME_OUT)
        })
    }

    deleteCompetencies = (ids) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                ids.forEach(id => {
                    const index = this._competencies.findIndex(el => el.id == id);
                    this._competencies.splice(index, 1);
                })
                resolve();
            }, TIME_OUT)
        })
    }

    getCompetencies = (copmetenceGroupId) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this._competencies.filter(el => Number(copmetenceGroupId) === Number(el.idGroup)));
            }, TIME_OUT)
        })
    }

    createCompetenciesGroup = (competenciesGroup) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this._groupsCompetence.push({
                    id: Math.floor(Math.random() * 100),
                    name: competenciesGroup.name,
                    description: competenciesGroup.description,
                    idGroup: Number(competenciesGroup.idGroup)
                });
                resolve();
            }, TIME_OUT);
        })
    }

    updateCompetenciesGroup = (competenciesGroup) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const index = this._groupsCompetence.findIndex(({id}) => id == competenciesGroup.id);
                this._groupsCompetence[index] = {...competenciesGroup};
                resolve();
            }, TIME_OUT)
        })
    }

    deleteCompetenciesGroups = (ids) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                ids.forEach(id => {
                    const index = this._groupsCompetence.findIndex(el => el.id == id);
                    this._groupsCompetence.splice(index, 1);
                })
                resolve();
            }, TIME_OUT)
        })
    }

    getCompetenciesGroups = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this._groupsCompetence);
            }, TIME_OUT)
        })
    }

    createIndicator = (indicator) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this._indicators.push({
                    id: Math.floor(Math.random() * 100),
                    name: indicator.name,
                    idGroup: Number(indicator.idGroup)
                });
                resolve();
            }, TIME_OUT);
        })
    }

    updateIndicator = (indicator) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const index = this._indicators.findIndex(({id}) => id == indicator.id);
                this._indicators[index] = {id: indicator.id, name: indicator.name, idGroup: Number(indicator.idGroup)};
                resolve();
            }, TIME_OUT)
        })
    }

    deleteIndicators = (ids) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                
                ids.forEach(id => {
                    const index = this._indicators.findIndex(el => el.id == id);
                    this._indicators.splice(index, 1);
                })

                resolve();
            }, TIME_OUT)
        })
    }

    createIndicatorsGroup = (indicatorsGroup) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this._groupsIndicator.push({
                    id: Math.floor(Math.random() * 100),
                    ...indicatorsGroup
                })
                resolve();
            }, TIME_OUT)
        })
    }

    updateIndicatorsGroup = (indicatorsGroup) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const index = this._groupsIndicator.findIndex(({id}) => id == indicatorsGroup.id);
                this._groupsIndicator[index] = {...indicatorsGroup};
                resolve();
            }, TIME_OUT)
        })
    }

    deleteIndicatorsGroups = (ids) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                
                ids.forEach(id => {
                    const index = this._groupsIndicator.findIndex(el => el.id == id);
                    this._groupsIndicator.splice(index, 1);
                })

                resolve();
            }, TIME_OUT)
        })
    }
}

export default DummyStaffixService;