import mockCompetenceGroups from '../../fixtures/competencies'
import mockIndicatorGroups from '../../fixtures/indicators'

import TIME_OUT from './timeout'

const getCompetenceGroupById = (competenceGroups, id) => {
    const index = competenceGroups.findIndex(el => el.id == id);
    return competenceGroups[index];
}

const getCompetenceGroupByCompetenceId = (competenceGroups, competenceId) => {
    const index = competenceGroups.findIndex(el1 => {
        return el1.competencies.findIndex(el2 => el2.id == competenceId) !== -1;
    })
    return competenceGroups[index];
}

const getCompetenceById = (competenceGroup, competenceId) => {
    const index = competenceGroup.competencies.findIndex(el => el.id == competenceId);
    return competenceGroup.competencies[index];
}

const getIndicatorById = indicatorId => {
    let indicator;
    mockIndicatorGroups.some(el1 => {
        const index = el1.indicators.findIndex(el2 => el2.id == indicatorId);
        if(index == -1) return false;
        indicator = el1.indicators[index];
        indicator.groupId = el1.id;
        return true;
    })
    return indicator;
}

const getRandomId = () => Math.floor(Math.random() * 2000);

class CompetenceAPI {
    constructor() {
        this._competenceGroups = mockCompetenceGroups;
    }

    async getCompetenceByNamePattern(competenceGroupId, namePattern) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const competenceGroup = getCompetenceGroupById(this._competenceGroups, competenceGroupId);
                const competencies = competenceGroup.competencies.filter(el => el.name.includes(namePattern));
                resolve(competencies);
            }, TIME_OUT);
        });
    }

    async getCompetenceGroups() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this._competenceGroups.map(el => {
                    return {
                        id: el.id,
                        name: el.name,
                        description: el.description
                    }
                }));
            }, TIME_OUT);
        });
    }

    async getCompetenciesByGroupId(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const competenceGroup = getCompetenceGroupById(this._competenceGroups, id);
                resolve(competenceGroup.competencies.map(el => {
                    return {
                        id: el.id,
                        name: el.name,
                        description: el.description
                    }
                }));
            }, TIME_OUT);
        });
    }

    async createCompetenceGroup(competenceGroup) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this._competenceGroups.push({
                    ...competenceGroup, 
                    id: getRandomId()
                });
                resolve("ok");
            }, TIME_OUT);
        });
    }
    
    async createCompetence(competence) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const competenceGroup = getCompetenceGroupById(this._competenceGroups, competence.groupId);
                competenceGroup.competencies.push({
                    id: getRandomId(),
                    name: competence.name,
                    description: competence.description,
                    indicators: competence.indicators.map(el => {
                        return {
                            id: el.id,
                            influence: el.influence
                        };
                    })
                });
                resolve("ok");
            }, TIME_OUT);
        });
    }

    async updateCompetenceGroup(competenceGroup) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexGroup = this._competenceGroups.findIndex(el => el.id == competenceGroup.id);
                this._competenceGroups.splice(indexGroup, 1);
                this._competenceGroups.push(competenceGroup);
                resolve("ok");
            }, TIME_OUT);
        });
    }

    async updateCompetence(competence) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // find competence group by competence id
                const oldCompetenceGroup = getCompetenceGroupByCompetenceId(this._competenceGroups, competence.id);
                // remove competence from found competence group
                const indexCompetence = oldCompetenceGroup.competencies.findIndex(el1 => el1.id == competence.id);
                oldCompetenceGroup.competencies.splice(indexCompetence, 1);
                // find new competence group by competence id
                const nextCompetenceGroup = getCompetenceGroupById(this._competenceGroups, competence.groupId);
                // add competence to found competence group
                nextCompetenceGroup.competencies.push({
                    id: competence.id,
                    name: competence.name,
                    description: competence.description,
                    indicators: competence.indicators.map(el => {
                        return {
                            id: el.id,
                            influence: el.influence
                        }
                    })
                });
                resolve("ok");
            }, TIME_OUT);
        });
    }

    async deleteCompetenceGroups(ids) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                while(ids.length !== 0) {
                    const indexGroup = this._competenceGroups.findIndex(el => el.id == ids[0]);
                    this._competenceGroups.splice(indexGroup, 1);
                    ids.splice(0, 1);
                }
                resolve("ok");
            }, TIME_OUT);
        });
    }

    async deleteCompetencies(competenceGroupId, competenceIds) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const competenceGroup = getCompetenceGroupById(this._competenceGroups, competenceGroupId);
                competenceIds.forEach(el1 => {
                    const indexCompetence = competenceGroup.competencies.findIndex(el => el.id == el1);
                    competenceGroup.competencies.splice(indexCompetence, 1);
                })
                resolve("ok");
            }, TIME_OUT);
        });
    }

    async isCompetenceGroupExist(competenceGroupName) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const isExist = this._competenceGroups.some(el => el.name == competenceGroupName);
                resolve(isExist);
            }, TIME_OUT);
        });
    }

    async isCompetenceExist(competenceName) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const isExist = this._competenceGroups
                    .some(el1 => el1.competencies.some(el2 => el2.name == competenceName));
                resolve(isExist);
            }, TIME_OUT);
        });
    }

    async getCompetenceIndicators(competenceGroupId, competenceId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const competenceGroup = getCompetenceGroupById(this._competenceGroups, competenceGroupId);
                const competence = getCompetenceById(competenceGroup, competenceId);
                const indicators = competence.indicators.map(el => {
                    const indicator = getIndicatorById(el.id);
                    return {
                        ...el,
                        ...indicator
                    }
                })
                resolve(indicators);
            }, TIME_OUT);
        });
    }
}

export default CompetenceAPI;