import './App.css';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='app_body'></div>
      <Sidebar />
      {/* react router -> chat screen */}
    </div>
  );
}

export default App;
