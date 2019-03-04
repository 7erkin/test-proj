import { ICreatePosition, IDeletePosition, IUpdatePosition } from "../../types/action/position";

export const CREATE_POSITION = 'CREATE_POSITION';
export const DELETE_POSITION = 'DELETE_POSITION';
export const UPDATE_POSITION = 'UPDATE_POSITION';

export const createPosition = (position: Position): ICreatePosition => {
    return {
        type: CREATE_POSITION,
        payload: {}
    };
}

export const deletePosition = (position: Position): IDeletePosition => {
    return {
        type: DELETE_POSITION,
        payload: {}
    };
}

export const updatePosition = (position: Position): IUpdatePosition => {
    return {
        type: UPDATE_POSITION,
        payload: {}
    };
}