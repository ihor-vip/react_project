import './Post.css'

export default function Post({item}) {

    return (
        <div className={'box2'}>

            <div className={'container'}>
                <ul>
                    <li><b><i>- id: {item.id}</i></b></li>
                    <li><b><i>- title: {item.title}</i></b></li>
                    <li><b><i>- body: {item.body}</i></b></li>
                </ul>
            </div>


        </div>
    )
}