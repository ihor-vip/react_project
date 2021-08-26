const getCars = () => {
    return fetch('http://91.201.233.14/api/v1/cars')
        .then(value => value.json())
}

const addCar = ({model, price, year}) => {
   return  fetch('http://91.201.233.14/api/v1/cars', {
        method: 'POST',
        body: JSON.stringify({model, price, year}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then(value => value.json())
}

const editCar = (obj) => {
    let {id, model, price, year} = obj;
    console.log(obj);
    return  fetch('http://91.201.233.14/api/v1/cars/'+ id, {
        method: 'PUT',
        body: JSON.stringify({id, model, price, year}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then((value) => value.json())
}

export {getCars, addCar, editCar};