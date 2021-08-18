import './Comment.css'

export default function Comment({item}) {
    return (
        <div className={'comment'}>
            <ul>
                <li><b><i>- id: {item.id}</i></b></li>
                <li><b><i>- name: {item.name}</i></b></li>
                <li><b><i>- email: {item.email}</i></b></li>
                <li><b><i>- body: {item.body}</i></b></li>
            </ul>
        </div>
    )
}