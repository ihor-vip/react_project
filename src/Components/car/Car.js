import './Car.css';


export function Car({car: {id, model, price, year}}) {
    return (
        <div className={'box'}>
            <p>id: {id}</p>
            <p>model: {model}</p>
            <p>price: {price}</p>
            <p>year: {year}</p>
        </div>
    );
}