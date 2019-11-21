import TodosListReducer from "./TodosListReducer"
import {combineReducers} from "redux"

let rootReducer = combineReducers({
    TodosList : TodosListReducer
})
export default rootReducer;