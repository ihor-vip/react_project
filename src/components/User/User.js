import {
    withRouter
} from "react-router-dom";
import './User.css'

function User({item,history}){
    const navigateToUser =()=>{
        history.push(`/users/${item.id}`)
    }
    return(
        <div className={'box'}>
            <div className={'user'}>{item.name}</div> <button onClick={navigateToUser}>User info</button>
        </div>
    )
}
export default withRouter(User)