import {useState} from "react";
import {NewCar} from "../../services/service";
import Cars from "../cars/Cars";
import './Form.css'

export function Form(){

    let [model,setModel] = useState([]);
    let [price,setPrice] = useState([]);
    let [year,setYear] = useState([]);
    let [car,setCar] = useState({model:'', price:'',year:''})

    const onSubmitForm = (e) => {
        e.preventDefault()
        let tempCar = {price, model, year}
        NewCar(tempCar)
        setCar({...tempCar})
    }


    const onInputChangeModel = (e) => {
             let model = e.target.value
            setModel(model)
         }

    const onInputChangePrice = (e) => {
        let price = e.target.value
        setPrice(price)
    }

    const onInputChangeYear = (e)=> {
        let year = e.target.value
        setYear(year)
    }

    let [info, setInfo] = useState('hide')


    return (
        <div className={'wrap'}>
            <h1><b><i>Carlist Form</i></b></h1>
            <h2><b><i>Validation:</i></b></h2>
            <p><b><i>model: only alpha min 1 max 20 characters</i></b></p>
            <p><b><i>price: greater or equal than 0</i></b></p>
            <p><i>year: min 1990, max current year</i></p>
            <form onSubmit={onSubmitForm} className={'form'}>

                <input type="text" name={'model'} placeholder={'model'}  onInput={onInputChangeModel}/>

                <input type="text" name={'price'}  placeholder={'price'} onInput={onInputChangePrice}/>

                <input type="text" name={'year'}  placeholder={'year'} onInput={onInputChangeYear}/>

                <button onClick={()=>{
                    if (info === 'hide') {
                      setInfo('show')
                }}}>new car</button>

            </form>

            <div className={info}>
                <h3><b><i>this car been added to the car list:</i></b></h3>
                <p ><b><i>model: </i></b>{car.model}<b><i>; price: </i></b>{car.price}<b><i>; year: </i></b>{car.year}</p>
            </div>
            <div className={'carList'}><Cars/></div>
        </div>
    )
}