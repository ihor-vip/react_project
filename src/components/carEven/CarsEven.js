import {useEffect, useState} from "react";
import {getCars} from "../service/Service";
import {Cars} from "../car/Cars";

export function CarsEven (){
    const [carsEven, setCarsEven]= useState([]);
    useEffect(()=>{
        getCars().then(carsArr => {
            const filterArr = carsArr.filter(car=> car.model.length % 2 === 0);
            setCarsEven(filterArr);
        })
    }, []);

    return(
        <div>

            {
                carsEven && carsEven.map(value => <Cars car={value} key={value.id} />)
            }
        </div>
    )
}