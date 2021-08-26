import {useReducer} from "react";
import reducer from "../src/components/reducers/reducers";
import './App.css'

export default function App() {

    let [{a, b, c}, dispatch] = useReducer(reducer, {a: 0, b: 0, c: 0});

    return (
        <div className={'main-wrap'}>
            <h2>NUMBER a-{a} b-{b} c-{c}</h2>
                <div>
                    <button onClick={() => dispatch({obj: '1', act: '+'})}>increase <b>a</b> by 1</button>
                    <button onClick={() => dispatch({obj: '1', act: '-'})}>decrease <b>a</b> by 1</button>
                </div>

                <div>
                    <button onClick={() => dispatch({obj: '2', act: '+'})}>increase <b>b</b> by 1</button>
                    <button onClick={() => dispatch({obj: '2', act: '-'})}>decrease <b>b</b> by 1</button>
                </div>

                <div>
                    <button onClick={() => dispatch({obj: '3', act: '+'})}>increase <b>c</b> by 1</button>
                    <button onClick={() => dispatch({obj: '3', act: '-'})}>decrease <b>c</b> by 1</button>
                </div>
        </div>
    );
}