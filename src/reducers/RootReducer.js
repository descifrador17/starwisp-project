import notesReducer from "./notesReducer";
import { combineReducers } from "redux";

const RootReducer = combineReducers({
    notes: notesReducer
});

export default RootReducer;
