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
        this.name = initStruct.name;
        this.description = initStruct.description;
        this.indicators = [];
    }
}