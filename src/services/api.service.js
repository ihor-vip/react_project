import {addUser} from "../redux/actionCreators";

const getUsers = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json());
    return response;
}

const saveUser = async (dispatch, {name}) => {
    let reponse = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name
        })
    }).then(value => value.json());
    dispatch(addUser(reponse));

}
export {saveUser,getUsers}