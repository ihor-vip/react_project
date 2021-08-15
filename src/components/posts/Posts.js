import Post from "../post/Post";

export default function Posts({posts}) {



    return (
        <div>
            {
                posts.map((value,index) => <Post item={value} key={index}/>)

            }

        </div>
    )
}