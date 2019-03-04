export class Subdivision {
    id: number;
    name: string;
    description: string;

    constructor(initState: any) {
        this.id = initState.id || -1;
        this.name = initState.name || '';
        this.description = initState.description || '';
    }
}

export class Company {
    subdivisions: Array<Subdivision>;
    id: number;
    name: string;
    description: string;

    constructor(initState: any) {
        this.id = initState.id || -1;
        this.name = initState.name || '';
        this.description = initState.description || '';
        this.subdivisions = initState.subdivisions || [];
    }
}

export class CompanyStore { 
    companies: Array<Company>;

    constructor(initState: any) {
        this.companies = initState.companies || [];
    }

    static copy(store: CompanyStore): CompanyStore {
        return CompanyStore.fromStringToStore(JSON.stringify(store));
    }
    static fromStringToStore(serializedStore: string): CompanyStore {
        const deserializedStore = JSON.parse(serializedStore);
        const companies = (deserializedStore.companies as Array<Company>).map(company => {
            const subdivisions = company.subdivisions.map(subdivision => new Subdivision(subdivision));
            return new Company(Object.assign({}, company, {subdivisions: subdivisions}));
        }); 
        return new CompanyStore({companies: companies});
    }
    static transformAfterResponse(store: string) {
        return `{"companies": ${store} }`;
    }

    getCompanyById(id: number): Company {
        if(id < 0) return new Company({});
        const index = this.companies.findIndex(company => company.id === id);
        return this.companies[index];
    }

    addCompany(company: Company): void {
        this.companies.push(company);
    }

    deleteCompany(company: Company): void {
        const index = this.companies.findIndex(el => el.id === company.id);
        if(index === -1) return;
        this.companies.splice(index, 1);
    }

    updateCompany(company: Company): void {
        this.deleteCompany(company);
        this.addCompany(company);
    }

    deleteSubdivisions(subdivisionIds: Array<number>, companyId: number): void {
        const index = this.companies.findIndex(el => el.id === companyId);
        if(index === -1) return;
        this.companies[index].subdivisions = this.companies[index].subdivisions.filter(subdivision => {
            return !subdivisionIds.some(id => id === subdivision.id);
        });
    }
}