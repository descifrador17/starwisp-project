import * as actionTypes from './actionTypes';

export const createNote = (note) => {
    return {
        type: actionTypes.CREATE_NEW_NOTE,
        notes: note
    }
};