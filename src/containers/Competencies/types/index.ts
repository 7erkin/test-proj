export enum Influence {
    Positive = 'positive',
    Negative = 'negative',
    Undefined = 'undefined'
}

export class Indicator {
    public id: number;
    public influence: Influence;

    constructor(id: number, influence: Influence) {
        this.id = id;
        this.influence = influence;
    }
}

export class Competence {
    public id: number;
    public name: string;
    public description: string;
    public indicators: Array<Indicator>;

    constructor(initParams: any) {
        this.id = initParams.id;
        this.name = initParams.name;
        this.description = initParams.description;
        this.indicators = initParams.indicators == undefined ? [] : initParams.indicators.slice();
    }

    hasIndicator (indicatorId: number): boolean {
        return this.indicators.findIndex(indicator => indicator.id === indicatorId) !== -1;
    }
    getIndicatorInfluence(indicatorId: number): Influence {
        const index: number = this.indicators.findIndex(indicator => indicator.id === indicatorId);
        return index === -1 ? Influence.Undefined : this.indicators[index].influence;
    }

    addIndicator(indicatorId: number, influence: Influence) {
        this.indicators.push(new Indicator(indicatorId, influence))
    };

    deleteIndicator(indicatorId: number) {
        const index: number = this.indicators.findIndex(indicator => indicator.id === indicatorId);
        this.indicators.splice(index, 1);
    }

    updateIndicatorInfluence(indicatorId: number, influence: Influence) {
        const index: number = this.indicators.findIndex(indicator => indicator.id === indicatorId);
        this.indicators[index].influence = influence;
    };
}

export class CompetenceGroup {
    public id: number;
    public name: string;
    public description: string;
    public competencies: Array<Competence>;

    constructor(initParams: any) {
        this.id = initParams.id;
        this.name = initParams.name;
        this.description = initParams.description;
        this.competencies = [];
    }
}
