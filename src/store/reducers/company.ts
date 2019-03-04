import { CompanyStore } from "../../types/company-page";
import { ISaveLoadedCompanies, ICreateCompany, IUpdateCompany, IDeleteSubdivisions } from "../../types/action/company";
import IAction from "../../types/action";
import { SAVE_LOADED_COMPANIES, CREATE_COMPANY, UPDATE_COMPANY, DELETE_SUBDIVISIONS } from "../actions/company";


const saveLoadedCompaniesReducer = (state: CompanyStore, action: ISaveLoadedCompanies): CompanyStore => {
    return action.payload.companyStore;
}

const createCompanyReducer = (state: CompanyStore, action: ICreateCompany): CompanyStore => {
    const nextStore = CompanyStore.copy(state);
    const company = action.payload.company;
    nextStore.addCompany(company);
    return nextStore;
}

const updateCompanyReducer = (state: CompanyStore, action: IUpdateCompany): CompanyStore => {
    const nextStore = CompanyStore.copy(state);
    const company = action.payload.company;
    nextStore.updateCompany(company);
    return nextStore;
}

const deleteSubdivisionsReducer = (state: CompanyStore, action: IDeleteSubdivisions): CompanyStore => {
    const nextStore = CompanyStore.copy(state);
    nextStore.deleteSubdivisions(action.payload.subdivisionIds, action.payload.companyId);
    return nextStore;
}

const initialState = new CompanyStore({});

const rootReducer = (state: CompanyStore = initialState, action: IAction): CompanyStore => {
    switch(action.type){
        case SAVE_LOADED_COMPANIES:
            return saveLoadedCompaniesReducer(state, action as ISaveLoadedCompanies);
        case CREATE_COMPANY:
            return createCompanyReducer(state, action as ICreateCompany);
        case UPDATE_COMPANY:
            return updateCompanyReducer(state, action as IUpdateCompany);
        case DELETE_SUBDIVISIONS:
            return deleteSubdivisionsReducer(state, action as IDeleteSubdivisions);
        default:
            return state;
    }
}

export default rootReducer;