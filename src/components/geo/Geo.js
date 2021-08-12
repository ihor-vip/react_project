export default function Geo({geo:{lat, lng}}) {
    return (
        <div>
            <ul> <h3>Geo:</h3>
                <li><b><i>lat:</i></b> {lat}</li>
                <li><b><i>lng:</i></b> {lng}</li>
            </ul>
        </div>
    )
}