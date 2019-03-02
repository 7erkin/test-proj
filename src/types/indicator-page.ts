export class Indicator {
    public id: number;
    public name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

export class IndicatorGroup {
    public id: number;
    public name: string;
    public description: string;
    public indicators: Array<Indicator>;

    constructor(initStruct: any) {
        this.id = initStruct.id;
        this.name = initStruct.name || '';
        this.description = initStruct.description || '';
        this.indicators = initStruct.indicators || [];
    }

    hasIndicator(indicatorId: number): boolean {
        return this.indicators.findIndex(indicator => indicator.id == indicatorId) !== -1;
    }
    hasIndicatorByName(indicatorName: string): boolean {
        return this.indicators.some(indicator => indicator.name == indicatorName);
    }
    createIndicator(indicator: Indicator) {
        this.indicators.push(indicator);
    }
    deleteIndicator(indicatorId: number) {
        const indicatorIndex = this.indicators.findIndex(indicator => indicator.id == indicatorId);
        this.indicators.splice(indicatorIndex, 1);
    }
}

export class IndicatorStore{
    indicatorGroups: Array<IndicatorGroup>;
    
    constructor(obj: any) {
        this.indicatorGroups = obj.indicatorGroups || [];
    }

    static copy(store: IndicatorStore): IndicatorStore {
        return IndicatorStore.fromStringToStore(JSON.stringify(store));
    }
    static fromStringToStore(serializedStore: string): IndicatorStore {
        const deserializedStore = JSON.parse(serializedStore);
        const indicatorGroups = (deserializedStore.indicatorGroups as Array<IndicatorGroup>).map(indicatorGroup => {
            const indicators = indicatorGroup.indicators.map(indicator => {
                return indicator;
            });
            return new IndicatorGroup(Object.assign({}, indicatorGroup, {indicators: indicators}));
        }); 
        return new IndicatorStore({indicatorGroups});
    }
    static transformAfterResponse(store: string) {
        return `{"indicatorGroups": ${store} }`;
    }

    createIndicator(groupId: number, indicator: Indicator){
        const indicatorGroupIndex = this.indicatorGroups.findIndex(indicatorGroup => indicatorGroup.id == groupId);
        this.indicatorGroups[indicatorGroupIndex].createIndicator(indicator);
    }

    createIndicatorGroup(indicatorGroup: IndicatorGroup){
        this.indicatorGroups.push(indicatorGroup);
    }

    deleteIndicator(groupId: number, indicatorId: number){
        const indicatorGroupIndex = this.indicatorGroups.findIndex(indicatorGroup => indicatorGroup.id == groupId);
        this.indicatorGroups[indicatorGroupIndex].deleteIndicator(indicatorId);
    }

    deleteIndicatorGroup(groupId: number){
        const indicatorGroupIndex = this.indicatorGroups.findIndex(indicatorGroup => indicatorGroup.id == groupId);
        this.indicatorGroups.splice(indicatorGroupIndex, 1);
    }

    hasIndicatorInAnyGroup(indicatorName: string) {
        return this.indicatorGroups.some(indicatorGroup => indicatorGroup.hasIndicatorByName(indicatorName));
    }

    hasGroup(groupName: string) {
        return this.indicatorGroups.some(indicatorGroup => indicatorGroup.name == groupName);
    }
}