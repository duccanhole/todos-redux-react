import './App.css';
import { useSelector } from 'react-redux';
import TodoList from './feature/todos/todoList';
import Header from './header';
import Footer from './footer';

//reading state from store with useSelector
//store global state
//reading id of todo list
function App() {
  //access redux store state
  const todosId = useSelector(state=>state.todos.map(todo=>todo.id));
  return (
    <div id='todos'>
      {/**render header component */}
      <Header/>
      <div id='task-box'>
        {/**render to do list from state, if list empty, return text: 'Task empty'*/}
        {todosId.length===0?<div style={{'textAlign':'center'}}>Task empty.</div>:
        todosId.map(todo=> 
          <TodoList key={todo} id={todo}/>
        )}
      </div>
      <details>
        <summary style={{'margin':'auto', 'textAlign':'center','padding':'3%'}}>
          <b>ACTION</b>
        </summary>
        {/**render footer component */}
        <Footer/>
      </details>
    </div>
  );
}

export default App;
