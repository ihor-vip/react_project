import {useEffect, useState} from "react";
import {getCars} from "../../services/car.service";
import {Car} from "../car/Car";

import './Cars.css';


export function Cars() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        getCars().then(value => setCars([...value.reverse()]));
    }, []);

    return (
        <div>
            {
                cars && cars.map(item => <Car car={item} key={item.id}/>)
            }
        </div>
    );
}