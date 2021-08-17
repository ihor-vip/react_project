import {useState} from "react";
import {editCar} from "../../services/service";

import './Form.css'

export function Form1({item}){

    let [model,setModel] = useState([]);
    let [price,setPrice] = useState([]);
    let [year,setYear] = useState([]);
    let [auto,setAuto] = useState({model:'', price:'',year:''})

    const onSubmitForm = (e) => {
        let id = item.id
        let tempAuto = {id, model, price, year }
        editCar(tempAuto)
        e.preventDefault()
        setAuto({...tempAuto})
    }
console.log(auto)

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
            <h2><b><i>make some changes to the current car</i></b></h2>

            <form onSubmit={onSubmitForm} className={'form'}>

                <input type="text" name={'model'} placeholder={item.model}  onInput={onInputChangeModel}/>

                <input type="text" name={'price'} placeholder={item.price} onInput={onInputChangePrice}/>

                <input type="text" name={'year'} placeholder={item.year} onInput={onInputChangeYear}/>

                <button onClick={()=>{
                    if (info === 'hide') {
                        setInfo('show')
                    }}}>edit car</button>

            </form>


        </div>
    )
}