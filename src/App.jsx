import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Order from "./pages/Order";
import OrderConfirmation from "./pages/OrderConfirmation";

function App() {
    return (
        // <Router>
        //     <Switch>
        //         <Route exact path="/">
        //             <Home />
        //         </Route>
        //         <Route path="/siparis" element={<Order />}>
        //             <Order />
        //         </Route>
        //         <Route path="/siparis-onay">
        //             <OrderConfirmation />
        //         </Route>
        //     </Switch>
        // </Router>
        <Home />
    );
}

export default App; 
