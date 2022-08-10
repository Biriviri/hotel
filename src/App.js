import logo from './logo.svg';
import './App.css';
import Index from './index'
import { BrowserRouter as Router, Route, Switch }  from 'react-router-dom';     
function App() {
  return (
    <div className="App">
    <Router>
   <div>
     {/* A <Switch> looks through its children <Route>s and
         renders the first one that matches the current URL. */}
     <Routes>
     <Route exact path="/" element={<Home ></Home>}/>
     </Routes>
   </div>
 </Router>
    </div>
  );
}

export default App;
