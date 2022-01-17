import { createStore } from "redux";
import rootReducer from "./reducer";

let preloadState;
const todosString = localStorage.getItem('todos');
if(todosString){
    //convert to json format
    preloadState = JSON.parse(todosString);
}
//create redux store
const store = createStore(rootReducer, preloadState);
export default store;