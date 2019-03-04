import { IndicatorStore } from "./indicator-page";
import { CompetenceStore } from "./competence-page";
import { CompanyStore } from "./company-page";


export class Store {
    public indicatorStore: IndicatorStore;
    public competenceStore: CompetenceStore;
    public companyStore: CompanyStore;

    constructor(init: any) {
        this.indicatorStore = new IndicatorStore({});
        this.competenceStore = new CompetenceStore({});
        this.companyStore = new CompanyStore({});
    }
}
