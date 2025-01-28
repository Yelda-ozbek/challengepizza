import "./Home.css";

import Logo from "../../images/iteration-1-images/logo.svg";

const Home = () => {
    return (
        <div className="home">
            <img src={Logo} />
            <div className="content">
                <p>
                    KOD ACIKTIRIR<br />
                    PİZZA, DOYURUR
                </p>
                <button>ACIKTIM</button>
            </div>
        </div>
    );
};


export default Home;