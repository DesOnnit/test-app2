import { React, useState } from 'react';
import { Switch, Route } from "react-router-dom";
import HomePage from '../HomePage/HomePage';
import Form from '../Form/Form';
import { UserContext } from "../context/UserContext";
import './App.css';

function App() {
  const [userContext, setUserContext] = useState('')

  function changeData(data) {
    setUserContext(data)
  }

  return (
    <UserContext.Provider value={userContext}>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/form">
            <Form
              changeData={changeData} />
          </Route>
          <Route path="/form/edit">
            <Form
              changeData={changeData} />
          </Route>
        </Switch>
      </div>
    </UserContext.Provider>
  );
}

export default App;
