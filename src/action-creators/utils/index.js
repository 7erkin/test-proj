import {
    SAVE_STORE_FROM_LOCAL_STORE
} from '../../actions/utils'

const saveStoreFromLocalStorage = reduxStore => {
    return {
        type: SAVE_STORE_FROM_LOCAL_STORE,
        payload: {
            value: reduxStore
        }
    }
}

export {
    saveStoreFromLocalStorage
}