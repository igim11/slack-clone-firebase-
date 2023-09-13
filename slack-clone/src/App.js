import './App.css';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Chat from './Chat/Chat';
import Login from './Login/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { useState } from 'react';

function App() {
  const [user, setUser] = useState('Migi');

  // fetch('http://206.189.91.54/api/v1/auth/', {
  //   method: "POST",
  //   headers: {
  //     "email": "user1@example.com",
  //     "password": "12345678",
  //     "password_confirmation": "12345678"
  //   }})
  // .then(res => res.json())
  // .then(data => console.log(data))
  
  return (
    <div className="App">
      <Router>
        {!user? (
          <Login />
        ) : (
        <>
          <Header />
          <div className='app_body'>
            <Sidebar />
              <Switch>
                <Route path="/room">
                  <Chat />
                </Route>
                <Route path ="/">
                  <h1>Welcome</h1>
                </Route>
              </Switch>
            {/* react router -> chat screen */}
          </div>
        </>
        )}
      </Router>
    </div>
  );
}

export default App;
