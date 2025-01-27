import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Order from "./pages/Order";
import OrderConfirmation from "./pages/OrderConfirmation";

function App(){
 return (
  <Router>
   <Routes>
    <Route path="/" element = {<Home/>} />
    <Route path="/siparis" element = {<Order/>} />
    <Route path="/siparis-onay" element = {<OrderConfirmation/>} />
   </Routes>
  </Router>
 );
}

export default App; 
