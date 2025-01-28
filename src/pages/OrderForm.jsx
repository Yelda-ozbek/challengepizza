import { useState } from "react";

import Logo from "../../images/iteration-1-images/logo.svg";

import "./OrderForm.css";

const OrderForm = () => {

    const [formData, setFormData] = useState({
        isim: "Position Absolute Acı Pizza",
        fiyat: "85.50₺",
        puan: 4.9,
        yorumSayisi: 200,
        aciklama: `Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen "pizzetta" denir.`
    });

    return (
        <div className="order-form">
            <header>
                <img src={Logo} />
                <nav>
                    <span>Anasayfa</span> - <span>Seçenekler</span> - <span className="active">Sipariş Oluştur</span>
                </nav>
            </header>
            <section>
                <h2>{formData.isim}</h2>
                <div className="details">
                    <h3>{formData.fiyat}</h3>
                    <span className="ratings">
                        <span>{formData.puan}</span>
                        <span>({formData.yorumSayisi})</span>
                    </span>
                </div>
                <p className="description">{formData.aciklama}</p>
                <form>
                    <div className="first-section">
                        <div className="size">
                            <h4>Boyut Seç <span className="required">*</span></h4>
                        </div>
                        <div className="hamur">

                        </div>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default OrderForm;