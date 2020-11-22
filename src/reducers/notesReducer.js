import * as actionTypes from '../actions/actionTypes';

const notesReducer = (state = [], action) => {
    console.log("In reducer")
    switch (action.type) {
        case actionTypes.CREATE_NEW_NOTE:
            return {
                state: action.notes
            };
        default:
            return state;
    }
};

export default notesReducer;