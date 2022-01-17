import { useState } from "react";
import { useDispatch } from "react-redux";

function Header(){
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    const handleKey = (e)=>{
      //dispatch event to redux store
        if(e.key==='Enter' && text.trim()){
            dispatch({type:'todos/todosAdded', payload: text.trim()});
            setText('');
        }
    }
    return (
        <div style={{'display': 'flex','justifyContent':'center'}}>
        <input 
          placeholder='Write task here ...' 
          name='input'
          onChange={(e)=>setText(e.target.value)}
          onKeyDown={handleKey}
          value={text}
        />
      </div>
    );
}
export default Header;