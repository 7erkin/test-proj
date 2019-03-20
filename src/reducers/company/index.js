import * as declaredAction from '../../actions/company'

const saveLoadedCompanies = (state, action) => {
    return {
        ...state,
        companies: action.payload.companies
    }
}

const saveLoadedVisibleCompanies = (state, action) => {
    return {
        ...state,
        visibleCompanies: action.payload.companies instanceof Array ? action.payload.companies : [action.payload.companies]
    }
}

const updateLoadingVisibleCompanies = (state, action) => {
    return {
        ...state,
        loading: {
            ...state.loading,
            visibleCompanies: !state.loading.visibleCompanies
        }
    }
}

const setActiveCompany = (state, action) => {
    return {
        ...state,
        selectedCompanyId: action.payload.id
    }
}

// ==========
const setEditCompany = (state, action) => {
    return {
        ...state,
        editCompany: {
            ...state.editCompany,
            ...action.payload.company
        }
    }
}

const resetEditCompany = (state, action) => {
    return {
        ...state,
        editCompany: {
            id: '',
            name: '',
            description: '',
            subdivisions: [],
            addedSubdivisions: [],
            pointedAddedSubdivisions: [],
            pointedSubdivisions: []
        }
    }
}

const setEditCompanyName = (state, action) => {
    return {
        ...state,
        editCompany: {
            ...state.editCompany,
            name: action.payload.name
        }
    }
}

const setEditCompanyDescription = (state, action) => {
    return {
        ...state,
        editCompany: {
            ...state.editCompany,
            description: action.payload.description
        }
    }
}

const deletePointedAddedSubdivisions = (state, action) => {
    const addedSubdivisions = state.editCompany.addedSubdivisions.filter(el1 => {
        return !state.editCompany.pointedAddedSubdivisions.some(el2 => el2 == el1.id);
    });

    return {
        ...state,
        editCompany: {
            ...state.editCompany,
            addedSubdivisions,
            pointedAddedSubdivisions: []
        }
    }
}

const startDeletingSubdivisions = (state, action) => {
    return {
        ...state,
        loading: {
            ...state.loading,
            deleteSubdivisions: true
        }
    }
}

const finishDeletingSubdivisions = (state, action) => {
    return {
        ...state,
        loading: {
            ...state.loading,
            deleteSubdivisions: false
        }
    }
}

const updatePointedSubdivisions = (state, action) => {
    const id = action.payload.id;
    let nextSubdivisions = [];
    if(id < 0) {
        const index = state.editCompany.pointedAddedSubdivisions.findIndex(el => el == id);
        if(index == -1) {
            nextSubdivisions = [...state.editCompany.pointedAddedSubdivisions, id];
        } else {
            nextSubdivisions = [...state.editCompany.pointedAddedSubdivisions];
            nextSubdivisions.splice(index, 1);
        }
        return {
            ...state,
            editCompany: {
                ...state.editCompany,
                pointedAddedSubdivisions: nextSubdivisions
            }
        }
    }
    if(id >= 0) {
        const index = state.editCompany.pointedSubdivisions.findIndex(el => el == id);
        if(index == -1) {
            nextSubdivisions = [...state.editCompany.pointedSubdivisions, id];
        } else {
            nextSubdivisions = [...state.editCompany.pointedSubdivisions];
            nextSubdivisions.splice(index, 1);
        }
        return {
            ...state,
            editCompany: {
                ...state.editCompany,
                pointedSubdivisions: nextSubdivisions
            }
        }
    }
}

// ========== 
const resetNewCompany = (state, action) => {
    return {
        ...state,
        newCompany: {
            name: '',
            description: '',
            subdivisions: [],
            pointedSubdivisions: []
        }
    }
}

const setNewCompanyName = (state, action) => {
    return {
        ...state,
        newCompany: {
            ...state.newCompany,
            name: action.payload.name
        }
    }
}

const setNewCompanyDescription = (state, action) => {
    return {
        ...state,
        newCompany: {
            ...state.newCompany,
            description: action.payload.description
        }
    }
}

const deleteNewCompanySubdivisions = (state, action) => {
    const newSubdivisions = state.newCompany.subdivisions.filter(el1 => {
        return !state.newCompany.pointedSubdivisions.some(el2 => el2 === el1.id);
    });
    return {
        ...state,
        newCompany: {
            ...state.newCompany,
            subdivisions: newSubdivisions,
            pointedSubdivisions: []
        }
    }
}

const updateNewCompanyPointedSubdivisions = (state, action) => {
    const pointedSubdivisions = state.newCompany.pointedSubdivisions.slice();
    const index = state.newCompany.pointedSubdivisions.findIndex(el => el == action.payload.id);
    index !== -1 ? pointedSubdivisions.splice(index, 1) : pointedSubdivisions.push(action.payload.id);
    return {
        ...state,
        newCompany: {
            ...state.newCompany,
            pointedSubdivisions
        }
    }
}

// ==========
const addSubdivisionsToCompany = (state, action) => {
    const isNewCompany = state.editCompany.id == '';
    debugger;
    if(isNewCompany) 
        return {
            ...state,
            newCompany: {
                ...state.newCompany,
                subdivisions: [...state.newCompany.subdivisions, ...state.newSubdivisions]
            }
        }
    return {
        ...state,
        editCompany: {
            ...state.editCompany,
            addedSubdivisions: [...state.editCompany.addedSubdivisions, ...state.newSubdivisions]
        }
    };
}

const addSubdivision = (state, action) => {
    const newSubdivision = state.newSubdivision;
    newSubdivision.id = Math.floor(Math.random() * (-100));
    const newSubdivisions = [...state.newSubdivisions, state.newSubdivision];
    return {
        ...state,
        newSubdivisions,
        newSubdivision: {
            id: '',
            name: '',
            description: ''
        }
    };
}

const updateSubdivisionName = (state, action) => {
    return {
        ...state,
        newSubdivision: {
            ...state.newSubdivision,
            name: action.payload.name
        }
    }
}

const updateSubdivisionDescription = (state, action) => {
    return {
        ...state,
        newSubdivision: {
            ...state.newSubdivision,
            description: action.payload.description
        }
    }
}

const resetAddingSubdivision = (state, action) => {
    return {
        ...state,
        newSubdivision: {
            id: '',
            name: '',
            description: ''
        }
    }
}

const deleteSubdivision = (state, action) => {
    const index = state.newSubdivisions.findIndex(el => el.id == action.payload.id);
    const newSubdivisions = [...state.newSubdivisions];
    newSubdivisions.splice(index, 1);
    return {
        ...state,
        newSubdivisions
    }
}

const leaveForm = (state, action) => {
    return {
        ...state,
        newSubdivisions: [],
        newSubdivision: {
            id: '',
            name: '',
            description: ''
        }
    }
}

const saveUpdatedSubdivisions = (state, action) => {
    return {
        ...state,
        editCompany: {
            ...state.editCompany,
            subdivisions: [...action.payload.subdivisions]
        }
    }
}

const updateSubdivisionAddFormVisible = (state, action) => {
    return {
        ...state,
        visible: {
            ...state.visible,
            subdivisionAddForm: !state.visible.subdivisionAddForm
        }
    }
}
const initialState = {
    companies: [],
    selectedCompanyId: null,
    visibleCompanies: [],
    newCompany: {
        name: '',
        description: '',
        subdivisions: [],
        pointedSubdivisions: []
    },
    editCompany: {
        id: '',
        name: '',
        description: '',
        subdivisions: [],
        addedSubdivisions: [],
        pointedAddedSubdivisions: [],
        pointedSubdivisions: []
    },
    newSubdivisions: [],
    newSubdivision: {
        id: '',
        name: '',
        description: ''
    },
    loading: {
        visibleCompanies: false,
        companies: false,
        deleteSubdivisions: false
    },
    error: {
        visibleCompanies: false,
        companies: false
    },
    visible: {
        subdivisionAddForm: false
    }
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case declaredAction.FINISH_LOADING_COMPANIES:
        case declaredAction.START_LOADING_COMPANIES:
            return updateLoadingVisibleCompanies(state, action);
        case declaredAction.SAVE_LOADED_COMPANIES:
            return saveLoadedCompanies(state, action);
        case declaredAction.SAVE_LOADED_VISIBLE_COMPANIES:
            return saveLoadedVisibleCompanies(state, action);
        case declaredAction.SET_ACTIVE_COMPANY:
            return setActiveCompany(state, action);

        case declaredAction.SET_EDIT_COMPANY:
            return setEditCompany(state, action);
        case declaredAction.RESET_EDIT_COMPANY:
            return resetEditCompany(state, action);
        case declaredAction.SET_EDIT_COMPANY_NAME:
            return setEditCompanyName(state, action);
        case declaredAction.SET_EDIT_COMPANY_DESCRIPTION:
            return setEditCompanyDescription(state, action);
        case declaredAction.DELETE_POINTED_ADDED_SUBDIVISIONS:
            return deletePointedAddedSubdivisions(state, action);
        // case declaredAction.DELETE_POINTED_SUBDIVISIONS:
        //     return deletePointedSubdivisions(state, action);
        case declaredAction.START_DELETING_SUBDIVISIONS:
            return startDeletingSubdivisions(state, action);
        case declaredAction.FINISH_DELETING_SUBDIVISIONS:
            return finishDeletingSubdivisions(state, action);
        case declaredAction.SAVE_UPDATED_SUBDIVISIONS:
            return saveUpdatedSubdivisions(state, action);
        case declaredAction.UPDATE_POINTED_SUBDIVISIONS:
            return updatePointedSubdivisions(state, action);

        case declaredAction.RESET_NEW_COMPANY:
            return resetNewCompany(state, action);
        case declaredAction.SET_NEW_COMPANY_NAME:
            return setNewCompanyName(state, action);
        case declaredAction.SET_NEW_COMPANY_DESCIRPTION:
            return setNewCompanyDescription(state, action);
        case declaredAction.DELETE_NEW_COMPANY_SUBDIVISIONS:
            return deleteNewCompanySubdivisions(state, action);
        case declaredAction.UPDATE_NEW_COMPANY_POINTED_SUBDIVISIONS:
            return updateNewCompanyPointedSubdivisions(state, action);
        
        case declaredAction.ADD_SUBDIVISIONS_TO_COPMANY:
            return addSubdivisionsToCompany(state, action);
        case declaredAction.ADD_SUBDIVISION:
            return addSubdivision(state, action);
        case declaredAction.UPDATE_SUBDIVISION_NAME:
            return updateSubdivisionName(state, action);
        case declaredAction.UPDATE_SUBDIVISION_DESCRIPTION:
            return updateSubdivisionDescription(state, action);
        case declaredAction.RESET_ADDING_SUBDIVISION:
            return resetAddingSubdivision(state, action);
        case declaredAction.DELETE_SUBDIVISION:
            return deleteSubdivision(state, action);
        case declaredAction.LEAVE_FORM:
            return leaveForm(state, action);

        case declaredAction.UPDATE_VISIBLE_SUBDIVISIONS_ADD_FORM:
            return updateSubdivisionAddFormVisible(state, action);
        default: 
            return state;
    }
}

export default rootReducer;