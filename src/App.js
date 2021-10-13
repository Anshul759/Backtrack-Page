import  React from "react"
import './App.css';
import { BrowserRouter as Router  } from "react-router-dom";
import Navigation from './Components/Navigation/navigation'
import Start from './Components/Start/start'
import Info from './Components/Info/info'
function App() {
  return (
    <Router>
      <Navigation/>
      <Start />
       <Info />
      {/*<Footer /> */}
    </Router>
  );
}

export default App;
