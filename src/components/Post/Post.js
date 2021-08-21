import {
    withRouter,
    Link
} from "react-router-dom";
import './Post.css'

function Post({item,history}){

    return(
        <div className={'post'}>
            Post - {item.id} - <Link to={`/posts/${item.id}`}> post details</Link>
        </div>
    )
}

export default withRouter(Post)