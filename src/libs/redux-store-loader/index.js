const REDUX_STORE_NAME = 'reduxStore';

const ifReduxStoreInLocalStorage = () => {
    return window.localStorage.getItem(REDUX_STORE_NAME) !== null;
}

const getReduxStoreFromLocalStorage = () => {
    const reduxStore = window.localStorage.getItem(REDUX_STORE_NAME);

    if(reduxStore === null) throw new Error('Redux store doesn\'t exist in localStore');

    const store = JSON.parse(reduxStore);

    const {
        companiesPage: {
            companies
        },
        requestsPage: {
            requests
        }
    } = store;

    return {
        companies,
        requests
    }
}

const deleteReduxStoreFromLocalStorage = () => {
    window.localStorage.removeItem(REDUX_STORE_NAME);
}

const saveReduxStoreInLocalStorage = store => {
    window.localStorage.setItem(REDUX_STORE_NAME, JSON.stringify(store));
}

export {
    ifReduxStoreInLocalStorage,
    getReduxStoreFromLocalStorage,
    saveReduxStoreInLocalStorage,
    deleteReduxStoreFromLocalStorage
}