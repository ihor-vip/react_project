import Comment from "../comment/Comment";

export default function Comments({comments}) {

    return (

        <div>
            {
                comments.map((value,index) => <Comment item={value} key={index}/>)
            }
            <br/><br/>

        </div>
    );
}