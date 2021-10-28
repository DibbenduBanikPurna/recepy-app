import React from 'react';
import Modals from './Components/Modal/Modals';
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

import Form from './Components/Form/Form';
import Detail from './Components/card/Detail';
const App = () => {


  return (
    <div className="App ">

      <Router>
        <Switch>
          <Route exact path="/"> <Form /> </Route>
          <Route path="/modal"> <Modals /> </Route>
          <Route path="/:id"><Detail /></Route>

        </Switch>
      </Router>


    </div>
  );
};

export default App;