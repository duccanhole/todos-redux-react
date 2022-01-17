import {BsFillTrashFill, BsCheckCircleFill} from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import './styleTodos.css';

//find todo by id (props)
const selectTodoById = (id, state)=>{
    return state.todos.find(todo => todo.id === id);
}
function TodoList({id}){
    //read state 
    const todo = useSelector(state=>selectTodoById(id, state));
    const {text, completed, display} = todo;
    const dispatch = useDispatch();
    //use dispatch to send event to redux store
    const handleDelete = ()=>{  
        dispatch({type: 'todos/todosDeleted', payload: todo.id});
    }
    const handleComplete = ()=>{
        dispatch({type: 'todos/todosToggled', payload: todo.id});
    }
    let textDecoration;
    if(!completed) textDecoration='none';
    else textDecoration='line-through';
    return (
        <div className='task' style={{'textDecoration':textDecoration, 'display':display}}>
            <button className='btn-del' onClick={handleDelete}>
                <BsFillTrashFill/>
            </button>
            <input 
                type='checkbox' 
                checked={completed}
                onChange={handleComplete}
                name={id}
            />
            <label htmlFor={id} className='checkInput' onClick={handleComplete}>
                <span><BsCheckCircleFill/></span>
            </label>
            {text}
        </div>
    );
}
export default TodoList;