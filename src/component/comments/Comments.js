import Comment from "../comment/Comment";

export default function Comments({comments}) {
    return (
        <div>
            <h2>Comments</h2>
            {
                comments.map((value,index)=> <Comment item={value} key={index}/>)
            }
        </div>
    )
}