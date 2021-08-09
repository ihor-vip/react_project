import './simpson.css'
export function Simpson({pTitle,pAge,picture,pInfo}) {

    return (
        <div className={'simpson'}>
            <h2> {pTitle} </h2>
            <h3> {pAge} </h3>
            <img src= {picture} alt=""/>
            <p> {pInfo} </p>

        </div>
    );
}