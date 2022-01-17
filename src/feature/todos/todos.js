const initState = [/*{ id: (number), text: (string), completed: (boolean)}*/];
//get id of element
function nextTodosId(todos){
    return todos.length;
}
//handle state via action
function todosReducer(state=initState, action){
    //use spread {...} to coppy old state
    //return array in object
    switch(action.type){
        //todos
        case 'todos/todosAdded':{
            return [
                ...state,
                {
                    id: nextTodosId(state),
                    text: action.payload,
                    completed: false,
                    display: 'block',
                }
            ];
        }
        case 'todos/todosToggled':{
            return state.map(todo=>{
                if(todo.id!==action.payload){
                    return todo;
                }
                return {
                    ...todo,
                    completed: !todo.completed
                }
            })
        }
        case 'todos/todosDeleted':{
            return state.filter(todo => todo.id!==action.payload)
        }
        case 'todos/All':{
            return state.map(todo =>{
                return{
                    ...todo,
                    display:'block',
                }
            });
        }
        //filter
        case 'filters/filtersUncomplete':{
            return state.map((todo)=>{
                if(!todo.completed) return{
                    ...todo,
                    display:'block'
                }
                return{
                    ...todo,
                    display:'none',
                }
            })
        }
        case 'filters/filtersComplete':{
            return state.map(todo=>{
                if(todo.completed) return{
                    ...todo,
                    display:'block'
                }
                return{
                    ...todo,
                    display:'none',
                }
            })
        }
        //action
        case 'actions/markAllDone':{
            return state.map(todo=>{
                return{
                    ...todo,
                    completed:true,
                }
            })
        }
        case 'actions/clearComplete':{
            return state.filter(todo=>!todo.completed);
        }
        case 'actions/clearUncomplete':{
            return state.filter(todo=>todo.completed);
        }
        case 'actions/clearAll':{
            return [];
        }
        default:
            return state;
    }
}
export default todosReducer;