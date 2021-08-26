import {
    BrowserRouter as Router,
    Link,
    Route
} from "react-router-dom";

import './App.css';
import {Cars} from "./Components/cars/Cars";
import {CarAddForm} from "./Components/carAddForm/CarAddForm";
import {EditCarForm} from "./Components/carEditForm/CarEditForm";


export default function App() {

    return (
        <Router>
            <div className={'wrap'}>
                <div>
                        <Link to={'/'}>About</Link>
                        <Link to={'/cars'}>All cars info</Link>
                        <Link to={'/create-car'}>Add new car</Link>
                        <Link to={'/update-car'}>Update car</Link>

                         <h1>CAR LIST</h1>
                </div>

                <div>
                    <Route exact path={'/'}/>

                    <Route path={'/cars'} component={Cars}/>

                    <Route path={'/create-car'} component={CarAddForm}/>

                    <Route path={'/update-car'} component={EditCarForm}/>

                </div>
            </div>
        </Router>
    );
}