import {Provider} from "react-redux";
import UserContainer from "./components/UserContainer";
import store from './redux/store'

export default function App() {

     return (
         <Provider store={store}>
                 <div>
                     <UserContainer/>
                 </div>
         </Provider>
      )
}