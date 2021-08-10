export function Address({pStreet, pSuite, pCity, pZipcode}) {


    return (
            <div>
                <h3> address</h3>
                <ul>
                    <li>street: {pStreet}</li>
                    <li>suite: {pSuite}</li>
                    <li>city: {pCity}</li>
                    <li>zipcode: {pZipcode}</li>
                </ul>
            </div>


    )
}

export default Address;