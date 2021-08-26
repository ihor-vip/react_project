import {useState} from "react";
import {addCar} from "../../services/car.service";


export function CarAddForm() {
    const [formState, setFormState] = useState({model: '', price: '', year: ''});

    function onChangeFormState({target: {name, value}}) {
        setFormState({...formState, [name]: value});
    }

    function saveFormData(event) {
        event.preventDefault();
            addCar(formState).then(value => console.log('Add new car info', value));


    }

    return (
        <div>
            <form>
                <div>
                    <div>
                        <p>Model</p>
                        <input type={'text'} name={'model'} value={formState.model} onChange={onChangeFormState}/>
                    </div>

                    <div>
                        <p>Price</p>
                        <input type={'text'} name={'price'} value={formState.price} onChange={onChangeFormState}/>
                    </div>

                    <div>
                        <p>Year</p>
                        <input type={'text'} name={'year'} value={formState.year} onChange={onChangeFormState}/>
                    </div>
                </div>

                <div className={'button'}>
                    <input type={'button'} value={'Save car info'} onClick={saveFormData}/>
                </div>
            </form>
        </div>
    );
}