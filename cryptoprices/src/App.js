import './App.css';
//IMPORT ROUTE AND COMPONENTS
import { Outlet } from "react-router"

function App() {
  //Use the Route component to specify each route
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
