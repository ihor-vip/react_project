import './Cars.css'

export function Cars ({car}){
    return(
        <div className={'container'} key={car.id}>

            <ul>
                <li><b><i>Id: </i></b>{car.id}</li>
                <li><b><i>Model: </i></b>{car.model}</li>
                <li><b><i>Price: </i></b>{car.price}</li>
                <li><b><i>Year: </i></b>{car.year}</li>
            </ul>

        </div>
    );
}