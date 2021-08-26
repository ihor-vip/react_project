import {useReducer} from "react";
import './App.css'

const reducer = (state={a: 0, b: 0}, action) => {
    if (action.obj === '1' && action.diya === '+') {
        return {...state, a: state.a+10}
    } else if (action.obj === '1' && action.diya === '-') {
        return {...state, a: state.a-2}
    }
    return {...state};
}

export default function App() {

    let [state, dispatch] = useReducer(reducer, {a:0});
    let {a} = state;
    console.log(state)
     return (
          <div className={'wrap'}>
             <h1> My number - {a}</h1>
              <button onClick={()=> dispatch({obj:'1', diya: '+'})}>increase number by 10</button>
              <button onClick={()=> dispatch({obj:'1', diya: '-'})}>decrease number by 2</button>
          </div>
      );
}          