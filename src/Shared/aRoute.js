import React from "react";
import { Switch, Redirect, useLocation, Route } from 'react-router';
import { useDispatch } from 'react-redux';


const Home = React.lazy(() => import('../Home/Home'));
const createEvent = React.lazy(() => import('../Event/Create'));

const AnRoute = () => {
    
    const dispatch = useDispatch();
    let location = useLocation()

    useEffect(() => {
      // dispatch(clearErrorMessage());
    }, [location, dispatch])
    return (
<Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/event/create" component={createEvent} />
       </Switch> 
    );
}

export default AnRoute;