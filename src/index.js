import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Home/Home';
import { render } from 'react-dom';
import AppLoading from './Spinners/AppLoader';
import reportWebVitals from './reportWebVitals';
import { Switch, Redirect, useLocation } from 'react-router';
// import { useDispatch } from 'react-redux';
// ReactDOM.render(
//   <React.StrictMode>
//     <Home />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

import { BrowserRouter, Route } from 'react-router-dom'


// const Home = React.lazy(() => import('../Home/Home'));
const createEvent = React.lazy(() => import('./Event/Create'));

const AnRoute = () => {

    // const dispatch = useDispatch();
    // let location = useLocation()

    // useEffect(() => {
    //     // dispatch(clearErrorMessage());
    // }, [location, dispatch])
    return (
      <React.Suspense fallback={<AppLoading />}>

        <BrowserRouter>
            <Switch>
                <Route exact path="/" exact component={Home} />
                <Route exact path="/event/create" exact component={createEvent} />
            </Switch>
        </BrowserRouter>
        </React.Suspense>
    );
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
render(<AnRoute />, document.getElementById('root'));