export class Position{
    dateCreate: number;
    dateApproval: number;
    name: string;
    description: string;
    companyId: number;
    subdivisionId: number;

    constructor(initState: any) {
        this.dateCreate = initState.dateCreate;
        this.dateApproval = initState.dateApproval;
        this.description = initState.description;
        this.name = initState.name;
        this.companyId = initState.companyId;
        this.subdivisionId = initState.subdivisionId;
    }
}

export class PositionStore {
    positions: Array<Position>;

    constructor(initState: any) {
        this.positions = initState.positions;
    }
}

