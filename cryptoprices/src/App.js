import './App.css';
//IMPORT ROUTE AND COMPONENTS
import { Route, Routes } from "react-router-dom"
import Currencies from "./pages/currencies"
import Main from "./pages/main"
import Price from "./pages/price"

function App() {
  //Use the Route component to specify each route
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/currencies" element={<Currencies />}/>
        <Route path="/price" element={<Price />}/>
      </Routes>
    </div>
  );
}

export default App;
