import {useEffect} from "react";
import {addUser, loadUsers} from "./redux/actionCreators";
import {useDispatch, useSelector} from "react-redux";

const fetchUsersWithThunk = () => async (dispatch) => {
    let response = await (await fetch('https://jsonplaceholder.typicode.com/users')).json();
    dispatch(loadUsers(response));
}

const addUserWithThunk = (userData) => async (dispatch) => {
    let response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: userData.name
        })
    });
    let savedUser = await response.json();
    dispatch(addUser(savedUser));

}

export default function App() {

    let state = useSelector(state => state);
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsersWithThunk());
    }, []);
    const New = () => {
        let user = {name: 'Lisa Jackson'}
        dispatch(addUserWithThunk(user));
    }
    return (
        <div>
            <button onClick={New}>save user</button>

            {state.users.map(value => <div>{value.name}</div>)}
        </div>
    );
}