import './Car.css'
import {deleteCar} from "../../services/service";
import {useState} from "react";
import {Form1} from "../form/NewForm";


export default function Car({item}) {
let [remove, setRemove] = useState('show')
let [editCar,setEditCar] = useState('')

    return (

        <div className={remove}>

                <div className={'cell'}>
                    <ul>
                        <li><b><i>car id: </i></b>{item.id}</li>
                        <li><b><i>car model: </i></b>{item.model}</li>
                        <li><b><i>car price: </i></b>{item.price}</li>
                        <li><b><i>car year:</i></b>{item.year}</li>
                    </ul>

                    <button onClick={()=>{deleteCar(item);
                        if(remove === 'show'){
                            setRemove('hide')
                        }
                    }}>delete car</button>


                    <button onClick={() => {
                        setEditCar(<Form1 item={item}/>)
                    }}>edit</button>

                    <div>
                        {editCar}
                    </div>

                </div>


        </div>
    );
}