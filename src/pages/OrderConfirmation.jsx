import "./OrderConfirmation.css";

import Logo from "../../images/iteration-1-images/logo.svg";

const OrderConfirmation = () => {

    return <div className="order-confirmation">
        <img src={Logo} />
        <div className="content">
            <p>
                TEBRIKLER!<br />
                SİPARİŞİNİZ ALINDI!
            </p>
        </div>
    </div>;
}

export default OrderConfirmation;