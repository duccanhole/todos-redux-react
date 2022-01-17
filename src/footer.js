import { useDispatch, useSelector } from "react-redux";

function Footer() {
    //count task uncomplete
    const todosRemain = useSelector(state=>{
        let remain = 0;
        for(let todo of state.todos){
            if(!todo.completed) remain++;
        }
        return remain;
    })
    const dispatch = useDispatch();
    const handleFilter = (e)=>{
        switch(e.target.value){
            case 'All': dispatch({type: 'todos/All', payload:''}); break;
            case 'Uncomplete': dispatch({type: 'filters/filtersUncomplete', payload:''}); break;
            case 'Complete': dispatch({type:'filters/filtersComplete', payload:''}); break;
            default:
                return;
        }
    }
    const stateEntire = useSelector(state=>state);
    const saveData =()=>{
        console.log(stateEntire);
        localStorage.setItem('todos', JSON.stringify(stateEntire));
    }
    const handleAction = (e)=>{
        switch(e.target.value){
            case 'markAllDone': dispatch({type:'actions/markAllDone', payload:''}); break;
            case 'clearComplete': dispatch({type:'actions/clearComplete', payload:''}); break;
            case 'clearUncomplete': dispatch({type:'actions/clearUncomplete', payload:''}); break;
            case 'clearAll': dispatch({type:'actions/clearAll', payload:''}); break;
            case 'saveData': saveData(); break;
            default: 
                return;
        }
    }
    return (
        <div id='footer'>
            <div className='box'>
                <button className='btn' value='markAllDone' onClick={handleAction}>Mark all complete</button>
                <button className='btn' value='clearComplete' onClick={handleAction}>Clear complete task</button>
                <button className='btn' value='clearUncomplete' onClick={handleAction}>Clear uncomplete task</button>
                <button className='btn' value='clearAll' onClick={handleAction}>Clear all</button>
                <button className="btn-save btn" value='saveData' onClick={handleAction}>Save data</button>
            </div>
            <div className='box'>
                <b><u>Task remain:</u> {todosRemain}</b>
            </div>
            <div className='box'>
                <b><u>Filter Status:</u></b>
                <input type='radio' name='filterStatus' value='All' onChange={handleFilter}/>
                <label htmlFor='All'>All</label>
                <input type='radio' name='filterStatus' value='Uncomplete' onChange={handleFilter}/>
                <label htmlFor='Active'>Uncomplete</label>
                <input type='radio' name='filterStatus' value='Complete' onChange={handleFilter}/>
                <label htmlFor='Complete'>Complete</label>
            </div>
        </div>
    );
}
export default Footer;