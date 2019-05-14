import {
    UPDATE_COMPANY_ADDRESS,
    UPDATE_COMPANY_NAME,
    UPDATE_SUBDIVISION_NAME,
    ADD_ONE_MORE_SUBDIVISION,
    SENDING_FORM,
    RESET
} from '../../actions/new-company-page'

const initialState = {
    subdivisions: [],
    companyName: '',
    companyAddress: '',
    subdivisionName: '',
    sendingForm: false
}

const updateCompanyAddress = (state, payload) => {
    return {
        ...state,
        companyAddress: payload.value
    }
}

const updateCompanyName = (state, payload) => {
    return {
        ...state,
        companyName: payload.value
    }
}

const updateSubdivisionName = (state, payload) => {
    return {
        ...state,
        subdivisionName: payload.value
    }
}

const removeSubdivision = (state, payload) => {
    const {id} = payload;
    //lodash
    const nextSubdivisions = [...state.subdivisions];
    const index = nextSubdivisions.findIndex(el => el.id == id);
    if(index == -1) return state;
    nextSubdivisions.splice(index, 1);
    return {
        ...state,
        subdivisions: nextSubdivisions
    }
}

const getRandomNumber = () => {
    return Math.floor(1000 * Math.random());
}

const addOneMoreSubdivision = (state, payload) => {
    const nextSubdivisions = state.subdivisions.slice();
    nextSubdivisions.push({
        id: getRandomNumber(), 
        name: state.subdivisionName
    })
    return {
        ...state,
        subdivisions: nextSubdivisions,
        subdivisionName: ''
    }
}

const prepareSendingForm = (state, payload) => {
    return {
        ...state,
        sendingForm: true
    }
}

const reset = () => {
    return {
        ...initialState
    }
}

export default (state = initialState, action) => {
    const {type, payload} = action;
    switch(type) {
        case UPDATE_COMPANY_ADDRESS:
            return updateCompanyAddress(state, payload);
        case UPDATE_COMPANY_NAME:
            return updateCompanyName(state, payload);
        case UPDATE_SUBDIVISION_NAME:
            return updateSubdivisionName(state, payload);
        case ADD_ONE_MORE_SUBDIVISION:
            return addOneMoreSubdivision(state, payload);
        case SENDING_FORM:
            return prepareSendingForm(state, payload);
        case RESET:
            return reset();
        default:
            return state;
    }
}
