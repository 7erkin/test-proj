import { IndicatorStore } from "./indicator-page";
import { CompetenceStore } from "./competence-page";


export class Store {
    public indicatorStore: IndicatorStore;
    public competenceStore: CompetenceStore;

    constructor(init: any) {
        this.indicatorStore = new IndicatorStore({});
        this.competenceStore = new CompetenceStore({});
    }
}
