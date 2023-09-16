import './App.css';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Chat from './Chat/Chat';
import Login from './Login/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    console.log('Current URL:', window.location.pathname);
  }, []);
  
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
                <Route exact path="/room/:roomId" render={(props) => (<Chat key={props.match.params.roomId} {...props} />)}>
                </Route>
                <Route path ="/">
                </Route>
              </Switch>
          </div>
        </>
        )}
      </Router>
    </div>
  );
}

export default App;