import App from "./App/App";
import react from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";





ReactDOM.render(
<Router>
    <Switch>
        <Route path="/book/:bookId" children={ <App /> } />
    </Switch>
</Router>,
 document.querySelector('#app'));