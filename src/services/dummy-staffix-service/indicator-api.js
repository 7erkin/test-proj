import mockIndicators from '../../fixtures/indicators';

import TIME_OUT from './timeout'

const getIndicatorsByIndicatorGroupId = (indicatorGroups, id) => {
    const index = indicatorGroups.findIndex(group => group.id == id);
    return indicatorGroups[index].indicators;
}

const getIndicatorGroups = (indicatorGroups) => {
    return indicatorGroups.map(group => {
        return {
            id: group.id,
            name: group.name,
            description: group.description
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

class IndicatorAPI {
    constructor() {
        this._indicatorGroups = mockIndicators;
    }

    async getIndicators(indicatorGroupId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(getIndicatorsByIndicatorGroupId(this._indicatorGroups, indicatorGroupId));
            }, TIME_OUT)
        });
    }

    async isIndicatorExist(indicatorName){
    }

    async getIndicatorsByPattern(indicatorGroupId, indicatorNamePattern){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(getIndicatorsByPattern(this._indicatorGroups, indicatorGroupId, indicatorNamePattern));
            }, TIME_OUT)
        });
    }

    async getIndicatorGroups() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(getIndicatorGroups(this._indicatorGroups));
            }, TIME_OUT)
        });
    }

    async deleteIndicators(indicatorGroupId, indicatorIds) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                removeIndicators(this._indicatorGroups, indicatorGroupId, indicatorIds);
                resolve('ok');
            }, TIME_OUT);
        });
    }

    async deleteIndicatorGroups(indicatorGroupIds) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this._indicatorGroups = this._indicatorGroups.filter(group => !indicatorGroupIds.includes(group.id));
                resolve('ok');
            }, TIME_OUT);
        });
    }

    async updateIndicator(indicator) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // find where was indicator before
                const indexOldGroup = this._indicatorGroups.findIndex(el1 => el1.indicators.some(el2 => el2.id == indicator.id));
                const indexIndicator = this._indicatorGroups[indexOldGroup].indicators.findIndex(el => el.id == indicator.id);
                // delete indicator from detected group
                this._indicatorGroups[indexOldGroup].indicators.splice(indexIndicator, 1);
                // find new indicator group
                const indexNewGroup = this._indicatorGroups.findIndex(el => el.id == indicator.groupId);
                // add indicator to new group
                this._indicatorGroups[indexNewGroup].indicators.push({
                    id: indicator.id,
                    name: indicator.name
                });
                console.log(this._indicatorGroups);
                resolve("ok");
            }, TIME_OUT);
        });
    }

    async createIndicator(indicator) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexGroup = this._indicatorGroups.findIndex(el => el.id == indicator.groupId);
                this._indicatorGroups[indexGroup].indicators.push({
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
                const index = this._indicatorGroups.findIndex(el => el.id == indicatorGroup.id);
                const indicators = this._indicatorGroups[index].indicators;
                this._indicatorGroups.splice(index, 1);
                this._indicatorGroups.push({
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
                this._indicatorGroups.push({
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

export default IndicatorAPI;