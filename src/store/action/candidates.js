export const Action = {
    ADD_COMPANY: 'CANDIDATES__ADD_COMPANY',
    ADD_CANDIDATE: 'CANDIDATES__ADD_CANDIDATE',
    CHANGE_COMPANY: 'CANDIDATES__CHANGE_COMPANY',
    CHANGE_DIVISION: 'CANDIDATES__CHANGE_DIVISION',
    SEARCH: 'CANDIDATES__SEARCH'
}

export const addCompany = companyName => {
    return {
        type: Action.ADD_COMPANY,
        payload: {
            name: companyName
        }
    };
};

export const addCandidate = candidateName => {
    return {
        type: Action.ADD_CANDIDATE,
        payload: {
            name: candidateName
        }
    };
};

export const changeCompany = companyName => {
    return {
        type: Action.CHANGE_COMPANY,
        payload: {
            name: companyName
        }
    };
};

export const changeDivision = divisionName => {
    return {
        type: Action.CHANGE_DIVISION,
        payload: {
            name: divisionName
        }
    };  
};

export const searchBy = value => {
    return {
        type: Action.SEARCH,
        payload: {
            value: value
        }
    };
};