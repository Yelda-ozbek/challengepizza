import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import OrderForm from "./pages/OrderForm";
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
        <OrderForm />
    );
}

export default App; 
