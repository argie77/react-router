import './App.css';
//IMPORT ROUTE AND COMPONENTS
//A component that renders the next match in a set of matches
//In this case, it is Main
//READ INTO IT: https://reactrouter.com/docs/en/v6/getting-started/concepts
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
