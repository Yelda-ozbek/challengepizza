import {Link} from "react-router-dom";

const Hero = () => {
    return (
        <div className="hero"> 
         <div className="hero-content">
            <h1>Teknolojik Yemekler</h1>
            <p>KOD ACIKTIRIR PİZZA, DOYURUR </p>
            <Link to ="./siparis" className="order-button">
                 ACIKTIM
            </Link>
            </div>
        </div>
    );
};