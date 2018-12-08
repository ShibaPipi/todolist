import {CHANGE_INPUT_VALUE, ADD_ITEM, DELETE_ITEM, GET_INIT_LIST} from "./actionTypes";

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value,
});

export const getAddItemAction = () => ({
    type: ADD_ITEM,
});

export const getDeleteItemAction = (deleteIndex) => ({
    type: DELETE_ITEM,
    deleteIndex,
});

export const getInitList = () => ({
    type: GET_INIT_LIST,
});