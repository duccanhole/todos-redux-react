//import reducer
import todosReducer from "./feature/todos/todos";
import { combineReducers } from "redux";

//merge all reducer to root
const rootReducer = combineReducers({
    todos: todosReducer,
})
export default rootReducer;