import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
} from "react-router-dom";
import {Users} from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import './App.css'

export default function App() {
    return (
        <Router>

                <div className={'main-wrap'}>
                    <h1>Choose what info page you would like to check</h1>
                    <div className={'wrap'}>

                        <Link to={'/users'}>List of Users </Link>

                        <Link to={'/posts'}>List of all Users Posts</Link>

                    </div>

                    <div>
                        <Switch>
                            <Route path={'/users'} component={Users}/>
                            <Route path={'/posts'} component={Posts}/>
                        </Switch>
                    </div>
                </div>

        </Router>
    );
}