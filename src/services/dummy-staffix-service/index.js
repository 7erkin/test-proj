import mockRequests from '../../fixtures/requests'
import mockCompanies from '../../fixtures/companies'
import mockSubdivisions from '../../fixtures/subdivisions'
import mockPositions from '../../fixtures/positions'
import mockCandidates from '../../fixtures/candidates'
import mockGroupsIndicator from '../../fixtures/groups-indicator'
import mockGroupsCompetence from '../../fixtures/groups-competence'
import mockIndicators from '../../fixtures/indicators'
import mockCompetencies from '../../fixtures/competencies'
import mockQuestions from '../../fixtures/questions'

import {
    ifReduxStoreInLocalStorage,
    getReduxStoreFromLocalStorage
} from '../../libs/redux-store-loader'

const TIMEOUT = 500;

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

        this._indicators = mockIndicators;
        this._competencies = mockCompetencies;

        this._questions = mockQuestions;
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
            }, TIMEOUT);
        });
    }
    
    getRequestById = (id) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const index = this._requests.findIndex(el => el.id == id);
                resolve(this._requests[index]);
            }, TIMEOUT);
        });
    }

    getCompanies = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this._companies);
            }, TIMEOUT)
        })
    }

    getSubdivisions = (companyId) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this._subdivisions.filter(el => el.companyId == companyId));
            }, TIMEOUT)
        })
    }

    getPositions = (subdivisionId) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this._positions.filter(el => el.subdivisionId == subdivisionId));
            }, TIMEOUT)
        })
    }

    getCandidates = (requestId) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this._candidates.filter(el => el.requestId == requestId));
            }, TIMEOUT)
        })
    }

    getGroupsIndicators = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this._groupsIndicator);
            }, TIMEOUT)
        })
    }

    getIndicators = (groupIndicatorId) => {
        console.log(this._indicators.filter(el => Number(groupIndicatorId) === el.idGroup))
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this._indicators.filter(el => Number(groupIndicatorId) === el.idGroup));
            }, TIMEOUT)
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
            }, TIMEOUT);
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
            }, TIMEOUT)
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
            }, TIMEOUT)
        })
    }

    getCompetencies = (copmetenceGroupId) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this._competencies.filter(el => Number(copmetenceGroupId) === Number(el.idGroup)));
            }, TIMEOUT)
        })
    }

    getCompetence = competenceId => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const index = this._competencies.findIndex(el => Number(competenceId) === Number(el.idGroup))
                resolve(this._competencies[index]);
            }, TIMEOUT)
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
            }, TIMEOUT);
        })
    }

    updateCompetenciesGroup = (competenciesGroup) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const index = this._groupsCompetence.findIndex(({id}) => id == competenciesGroup.id);
                this._groupsCompetence[index] = {...competenciesGroup};
                resolve();
            }, TIMEOUT)
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
            }, TIMEOUT)
        })
    }

    getCompetenciesGroups = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this._groupsCompetence);
            }, TIMEOUT)
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
            }, TIMEOUT);
        })
    }

    updateIndicator = (indicator) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const index = this._indicators.findIndex(({id}) => id == indicator.id);
                this._indicators[index] = {id: indicator.id, name: indicator.name, idGroup: Number(indicator.idGroup)};
                resolve();
            }, TIMEOUT)
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
            }, TIMEOUT)
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
            }, TIMEOUT)
        })
    }

    updateIndicatorsGroup = (indicatorsGroup) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const index = this._groupsIndicator.findIndex(({id}) => id == indicatorsGroup.id);
                this._groupsIndicator[index] = {...indicatorsGroup};
                resolve();
            }, TIMEOUT)
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
            }, TIMEOUT)
        })
    }

    // ========== Questions ==========

    getQuestionsGroups = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this._questionsGroups);
            }, TIMEOUT)
        })
    }

    //********** start utils */
    isCompetenceAlreadyInRes = (res, idCompetence) => {
        return res.some(el => el.idCompetence == idCompetence)
    }
    increaseQuantityQuestions = (res, idCompetence) => {
        const index = res.findIndex(el => el.idCompetence == idCompetence);
        res[index].questions++;
    }
    pushCompetenceIntoRes = (res, idCompetence) => {
        const index = this._competencies.findIndex(el => Number(el.id) === Number(idCompetence));
        const { name: competenceName, description: competenceDescription } = this._competencies[index];
        res.push({
            idCompetence,
            competenceName,
            competenceDescription,
            questions: 1
        })
    }
    isCompetenceBelongGroup = (idCompetence, idCompetenciesGroup) => {
        const index = this._competencies.findIndex(el => Number(el.id) === Number(idCompetence));
        return Number(this._competencies[index].idGroup) === Number(idCompetenciesGroup);
    }
    //************ end utils */

    getQuestionsGroupContent = (id) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const res = []
                this._questions.forEach(el => {
                    const { idCompetence } = el;
                    
                    if(!this.isCompetenceBelongGroup(idCompetence, id))
                        return;

                    if(this.isCompetenceAlreadyInRes(res, idCompetence))
                        this.increaseQuantityQuestions(res, idCompetence)
                    else 
                        this.pushCompetenceIntoRes(res, idCompetence)
                })
                resolve(res);
            }, TIMEOUT)
        })
    }

    getAllCompetencies = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this._competencies.map(({id, name}) => {
                    return {id, name}
                }));
            }, TIMEOUT)
        })
    }

    createQuestion = (question) => {
        console.log(' ====== ', question)
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this._questions.push({
                    id: Math.floor(Math.random() * 100),
                    ...question
                })
                console.log(this._questions)
                resolve();
            }, TIMEOUT)
        })
    }

    deleteQuestions = (ids) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                ids.forEach(id => {
                    const index = this._questions.findIndex(el => el.id == id);
                    this._questions.splice(index, 1);
                })
                resolve();
            }, TIMEOUT)
        })
    }

    getQuestions = (idCompetence) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this._questions.filter(el => Number(el.idCompetence) === Number(idCompetence)))
            }, TIMEOUT);
        })
    }
}

export default DummyStaffixService;