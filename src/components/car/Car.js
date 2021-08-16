import './Car.css'

export default function Car({item}) {

    return (

        <div className={'cell'}>
            <ul>
                <li><b><i>car id: </i></b>{item.id}</li>
                <li><b><i>car model: </i></b>{item.model}</li>
                <li><b><i>car price: </i></b>{item.price}</li>
                <li><b><i>car year:</i></b>{item.year}</li>
            </ul>
        </div>
    );
}