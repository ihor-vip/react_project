import {BrowserRouter as Router, Route, Link
} from "react-router-dom";
import {CarsEven} from "./components/carEven/CarsEven";
import {CarsOdd} from "./components/carOdd/CarsOdd";
import './App.css'

export default function App() {
    return (
        <Router>
            <div className={'main-wrap'}>
                <h1><b><i>Choose cars</i></b></h1>
                <div className={'wrap'}>
                    <Link to={'/EvenCar'}> Cars with even model name length </Link>
                    <br/>
                    <Link to={'/OddCar'}> Car with odd model length </Link>
                </div>

                <div>
                    <Route path={'/EvenCar'}>
                        <CarsEven/>
                    </Route>

                    <Route path={'/OddCar'}>
                        <CarsOdd/>
                    </Route>

                </div>
            </div>
        </Router>
    );
}