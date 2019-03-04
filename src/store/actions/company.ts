import { ISaveLoadedCompanies, ICreateCompany, IUpdateCompany, IDeleteSubdivisions } from "../../types/action/company";
import { CompanyStore, Company, Subdivision } from "../../types/company-page";
import { getRandomId } from "../../library";

export const SAVE_LOADED_COMPANIES = 'SAVE_LOADED_COMPANIES';
export const CREATE_COMPANY = 'CREATE_COMPANY';
export const UPDATE_COMPANY = 'UPDATE_COMPANY';
export const DELETE_SUBDIVISIONS = 'DELETE_SUBDIVISIONS';

// temporary method for reassign subdivision id. There will be subdivision id defined by server soon.
const assignProperIdToSubdivisions = (subdivisions: Array<Subdivision>): void => {
    subdivisions.forEach(subdivision => {
        if(subdivision.id < 0) subdivision.id = 1000 * getRandomId();
    });
}

export const saveLoadedCompanies = (loadedData: string): ISaveLoadedCompanies => {
    const store = CompanyStore.fromStringToStore(CompanyStore.transformAfterResponse(loadedData));
    return {
        type: SAVE_LOADED_COMPANIES,
        payload: {
            companyStore: store
        }
    }
}

export const createCompany = (company: Company): ICreateCompany => {
    assignProperIdToSubdivisions(company.subdivisions);
    return {
        type: CREATE_COMPANY,
        payload: {
            company: company
        }
    }
}

export const updateCompany = (company: Company): IUpdateCompany => {
    assignProperIdToSubdivisions(company.subdivisions);
    return {
        type: UPDATE_COMPANY,
        payload: {
            company: company
        }
    }
}

export const deleteSubdivisions = (subdivisionIds: Array<number>, companyId: number): IDeleteSubdivisions => {
    return {
        type: DELETE_SUBDIVISIONS,
        payload: {
            subdivisionIds,
            companyId
        }
    }
}