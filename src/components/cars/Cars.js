import {useEffect, useState} from "react";
import {getCars} from "../../services/service";
import Car from "../car/Car";
import './Cars.css'

export default function Cars() {

let [cars, setCars] = useState([])

useEffect(()=>{
    getCars().then(value => setCars([...value]))
},[])

    return (

        <div className={'container'}>
            {
                cars.map(value => <Car item={value} key={value.id}/>)
            }

        </div>
    );
}