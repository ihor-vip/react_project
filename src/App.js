import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
}

from "react-router-dom";

import Users from "./components/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";
import './App.css'



export default function App() {
    return (
        <Router>
            <div className={'wrap'}>
                <div className={'box1'}><Link to={'/'}>RELOAD</Link>
                    <br/></div>

                <div className={'box1'}><Link to={'/users-page'} target={'_blank'}>users</Link>
                    <br/></div>

               <div className={'box1'}> <Link to={'/posts-page'} target={'_blank'}>posts</Link>
                   <br/></div>

              <div className={'box1'}>  <Link to={'/comments-page'} target={'_blank'}>comments</Link>
                  <br/></div>

                <h2><b><i>Choose the info page</i></b></h2>
            </div>


            <div>

                <Switch>

                    <Route path={'/users-page'} component={Users}/>

                    <Route path={'/posts-page'} component={Posts}/>

                    <Route path={'/comments-page'} component={Comments}/>

                    {/*<Route path={'/posts-page'} render={(props) => {*/}

                    {/*    return <Posts/>*/}
                    }}/>


                </Switch>


            </div>


        </Router>
    );
}
