import Geo from "../geo/Geo";

export default function Address({address: {street, suite, city, zipcode,geo}}) {
    return (

        <div>
            <ul> <h3><i>Address</i></h3>
                <li><b><i>street:</i></b> {street}</li>
                <li><b><i>suite:</i></b> {suite}</li>
                <li><b><i>city:</i></b> {city}</li>
                <li><b><i>zipcode:</i></b> {zipcode}</li>
            </ul>
            <Geo geo={geo}/>
        </div>
    )
}