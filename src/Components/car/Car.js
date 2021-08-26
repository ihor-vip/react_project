import './Car.css';


export function Car({car: {id, model, price, year}}) {
    return (
        <div className={'box'}>
            <p>id</p> <p>{id}</p>
            <p>model</p> <p>{model}</p>
            <p>price</p> <p>{price}</p>
            <p>year</p> <p>{year}</p>
        </div>
    );
}