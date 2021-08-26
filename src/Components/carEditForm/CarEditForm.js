import {useEffect, useState} from "react";
import {editCar, getCars} from "../../services/car.service";


export function EditCarForm() {
    let [cars, setCars] = useState([])
    let [formState, setFormState] = useState({model: '', price: '', year: ''})
    let [checkCar, setCheckCar] = useState({})


    useEffect(() => {
        getCars().then(value => setCars([...value.reverse()]))
    }, [checkCar])


    const onsubmit = (e) => {
        e.preventDefault()
    }

    function onFormChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value})
    }

    function onSelectChange(e) {
        const carsId = e.target.value;
        console.log(carsId);
        const find = cars.find(value => value.id === +carsId);
        setFormState({
            id: carsId,
            model: find.model,
            price: find.price,
            year: find.year,
        })
    }


    let clickEditCar = (currentCar) => {
        console.log(formState);
        editCar({id: currentCar.id, ...formState})
            .then((value) => {
                setCheckCar(value);
                console.log(value);
            });
    }

    return (

        <div>
            <label>
                Choose Car:
                <select name="cars" id="cars" form="car-form" onChange={onSelectChange}>
                    {cars.map(value => <option name={"model"} value={value.id} key={value.id}>Model:{value.model} --
                        Price{value.price} -- Year{value.year}</option>)}
                </select>
            </label>
            <div>
                <form onSubmit={onsubmit} id='"car-form"'>
                    Edit Car
                    <input type="text" name={"model"} value={formState.model} placeholder='model'
                           onChange={onFormChange}/>
                    <input type="number" name={"price"} value={formState.price} placeholder='price'
                           onChange={onFormChange}/>
                    <input type="number" name={"year"} value={formState.year} placeholder='year'
                           onChange={onFormChange}/>

                    <button onClick={() => {clickEditCar(formState)}}>Change</button>
                </form>
            </div>
        </div>
    )
}

