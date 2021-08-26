import {useState} from "react";
import {addCar} from "../../services/car.service";
import './CarAddForm.css'


export function CarAddForm() {
    const [formState, setFormState] = useState({model: '', price: '', year: ''});

    function onChangeFormState({target: {name, value}}) {
        setFormState({...formState, [name]: value});
    }

    function saveFormData(event) {
        event.preventDefault();
            addCar(formState).then(value => console.log('Add new car', value));
    }

    return (
            <form className={'form-box'}>
                <div className={'input-box'}>
                    <div>
                        <h2>Model</h2>
                        <input type={'text'} name={'model'} value={formState.model} onChange={onChangeFormState}/>
                    </div>

                    <div>
                        <h2>Price</h2>
                        <input type={'text'} name={'price'} value={formState.price} onChange={onChangeFormState}/>
                    </div>

                    <div>
                        <h2>Year</h2>
                        <input type={'text'} name={'year'} value={formState.year} onChange={onChangeFormState}/>
                    </div>
                </div>

                    <input type={'button'} value={'Save car'} onClick={saveFormData}/>
            </form>
    );
}