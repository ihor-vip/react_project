import Address from "../address/Address";

export default function User({item, item: {address}}) {
    return (

        <div>
            <h2>{item.id}) <i>user:</i> {item.name}</h2>
            <ul>
                <li><b><i>username:</i></b> {item.username}</li>
                <li><b><i>email:</i></b> {item.email}</li>
                <li><b><i>phone:</i></b> {item.phone}</li>
                <li><b><i>website:</i></b> {item.website}</li>
                <li><b><i>COMPANY name:</i></b> {item.company.name}</li>
                <li><b><i>COMPANY catch phrase:</i></b> {item.company.catchPhrase}</li>
                <li><b><i>COMPANY bs:</i></b> {item.company.bs}</li>
            </ul>
            <Address address={item.address}/>
        </div>
    )
}