import { render } from '@testing-library/react';
import react from 'react';
import Men from './Men';
import Women from './Women';
import Errorpage from './ErrorPage';
import {Route, Switch} from 'react-router-dom';


const Routing=()=>{
    return(
    <>
    <h1>Men Category</h1>
        <Switch>
        <Route exact path="/men">
          <Men/>
        </Route>

        <Route path="/women">
          <Women/>
        </Route>

        <Route>
          <Errorpage />
        </Route>
        </Switch>

    </>
    )
}

export default Routing;