import {useEffect, useState} from "react";
import {getCars} from "../service/Service";
import {Cars} from "../car/Cars";

export function CarsOdd (){
    const [carsOdd, setCarsOdd]= useState([]);

    useEffect(()=>{
        getCars().then(carsArr => {
            const filterArr = carsArr.filter(car=> car.model.length % 2 !== 0);
            setCarsOdd(filterArr);
        })
    }, []);

    return(
        <div>
            {
                carsOdd && carsOdd.map(value=> <Cars car={value} key={value.id} />)
            }
        </div>
    )
}