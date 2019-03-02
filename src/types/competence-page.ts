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
        this.id = initParams.id || -1;
        this.name = initParams.name || '';
        this.description = initParams.description || '';
        this.indicators = initParams.indicators == undefined ? [] : initParams.indicators.slice();
    }

    hasIndicator (indicatorId: number): boolean {
        return this.indicators.findIndex(indicator => indicator.id === indicatorId) !== -1;
    }
    getIndicatorInfluence(indicatorId: number): Influence {
        const index: number = this.indicators.findIndex(indicator => indicator.id == indicatorId);
        return index === -1 ? Influence.Undefined : this.indicators[index].influence;
    }

    addIndicator(indicatorId: number, influence: Influence) {
        this.indicators.push(new Indicator(indicatorId, influence))
    };

    deleteIndicator(indicatorId: number) {
        const index: number = this.indicators.findIndex(indicator => indicator.id == indicatorId);
        this.indicators.splice(index, 1);
    }

    updateIndicatorInfluence(indicatorId: number, influence: Influence) {
        const index: number = this.indicators.findIndex(indicator => indicator.id == indicatorId);
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
        this.competencies = initParams.competencies || [];
    }

    hasCompetence(competenceId: number): boolean{
        return this.competencies.findIndex(competence => competence.id === competenceId) !== -1;
    }
    deleteCompetence(competenceId: number){
        const competenceIndex = this.competencies.findIndex(competence => competence.id == competenceId);
        this.competencies.splice(competenceIndex, 1);
    }
    createCompetence(competence: Competence){
        this.competencies.push(competence);
    }
    hasCompetenceByName(competenceName: string): boolean {
        return this.competencies.some(competence => competence.name == competenceName);
    }
}

export class CompetenceStore {
    competenceGroups: Array<CompetenceGroup>;
    private isValid = (index: number) => index >= 0;

    constructor(obj: any){
        this.competenceGroups = obj.competenceGroups || [];
    }

    static copy(store: CompetenceStore): CompetenceStore {
        return CompetenceStore.fromStringToStore(JSON.stringify(store));
    }
    static fromStringToStore(serializedStore: string): CompetenceStore {
        const deserializedStore = JSON.parse(serializedStore);
        const competenceGroups = (deserializedStore.competenceGroups as Array<CompetenceGroup>).map(competenceGroup => {
            const competencies = competenceGroup.competencies.map(competence => {
                return new Competence(competence);
            });
            return new CompetenceGroup(Object.assign({}, competenceGroup, {competencies: competencies}));
        }); 
        return new CompetenceStore({competenceGroups});
    }
    static transformAfterResponse(store: string) {
        return `{"competenceGroups": ${store} }`;
    }

    createCompetenceGroup(competenceGroup: CompetenceGroup){
        this.competenceGroups.push(competenceGroup);
    }

    deleteCompetenceGroups(competenceGroupIds: Array<number>) {
        const indexes: Array<number> = [];
        this.competenceGroups.forEach((competenceGroup, index) => {
            if(competenceGroupIds.some(id => id == competenceGroup.id))
                indexes.push(index);
        });
        indexes.sort((el1, el2) => -el1 + el2);
        indexes.forEach(index => this.competenceGroups.splice(index, 1));
    }

    createCompetence(competence: Competence, competenceGroupId: number) {
        const competenceGroupIndex = this.competenceGroups.findIndex(competenceGroup => competenceGroup.id === competenceGroupId);
        if(!this.isValid(competenceGroupIndex)) return;
        this.competenceGroups[competenceGroupIndex].createCompetence(competence);
    }

    deleteCompetence(competenceId: number, competenceGroupId: number) {
        debugger;
        const competenceGroupIndex = this.competenceGroups.findIndex(competenceGroup => competenceGroup.id === competenceGroupId);
        if(!this.isValid(competenceGroupIndex)) return;
        this.competenceGroups[competenceGroupIndex].deleteCompetence(competenceId);
    }

    updateCompetence(competence: Competence, competenceGroupId: number) {
        const competenceGroupIndex = this.competenceGroups.findIndex(competenceGroup => competenceGroup.id === competenceGroupId);
        if(!this.isValid(competenceGroupIndex)) return;
        const indexCompetenceGroupOfCompetence = this.competenceGroups.findIndex(competenceGroup => competenceGroup.hasCompetence(competence.id));
        this.competenceGroups[indexCompetenceGroupOfCompetence].deleteCompetence(competence.id);
        const indexNextCompetenceGroupOfCompetence = this.competenceGroups.findIndex(competenceGroup => competenceGroup.id === competenceGroupId);
        this.competenceGroups[indexNextCompetenceGroupOfCompetence].createCompetence(competence);
    }

    hasCompetenceInAnyGroup(competenceName: string): boolean {
        return this.competenceGroups.some(competenceGroup => competenceGroup.hasCompetenceByName(competenceName));
    }
    hasCompetenceGroup(competenceGroupName: string): boolean {
        return this.competenceGroups.some(competenceGroup => competenceGroup.name == competenceGroupName);
    }
}