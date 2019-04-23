import { START_LOADING_PAGE, START_LOADING_POSITIONS, FINISH_LOADING_POSITIONS, FINISH_LOADING_PAGE } from "../../actions/position/loading";

const startLoadingPage = () => {
    return {
        type: START_LOADING_PAGE
    }
}

const startLoadingPositions = () => {
    return {
        type: START_LOADING_POSITIONS
    }
}

const finishLoadingPositions = () => {
    return {
        type: FINISH_LOADING_POSITIONS
    }
}

const finishLoadingPage = () => {
    return {
        type: FINISH_LOADING_PAGE
    }
}

export {
    startLoadingPage,
    startLoadingPositions,
    finishLoadingPage,
    finishLoadingPositions
}