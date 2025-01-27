import { useState } from "react";
import axios from "axios";

const OrderForm = () => {
    const [formData,setFormData] = useState({
        isim: "",
        boyut:"orta", // varsayılan değer orta olduğu için orta yaptım
        malzemeler:[],
        notlar:"",
    })
    const malzemeSecenekleri = [
        "Sucuk",
        "Mantar",
        "Peynir",
        "Zeytin",
        "Biber",
        "Soğan",
        "Mısır",
        "Jambon"
    ];
    const handleSubmit = async (e) => {
        e.preventDefault();
      // validasyon kontrolleri yapalım

      if (formData.isim.length>3) {
        alert("İsim en az 3 karakter olmalıdır");
        return;
      }
      if (formData.malzemeler.length<4 || formData.malzemeler.length>10) {
        alert("4-10 arası malzeme seçebilirsiniz");
        return;
      }
      try {
        const response = await axios.post("https://reqres.in/api/pizza",formData);
        console.log("Sipariş özeti:",response.data);
      } catch (error) {
        console.error("Siparişiniz gönderilirken hata oluştu:",error)
      }
    };
    const handleMalzemeChange = (malzeme) => {
        setFormData(prev=>{
            if(prev.malzemeler.includes(malzeme)) {
                return {
                    ...prev,
                    malzemeler:[...prev.malzemeler,malzeme]
                };
            };
        });
    };

   return (
    <form onSubmit={handleSubmit} className="siparis-form">
      <div className="form-group">
     <label htmlFor="isim">İsim:</label>
     <input
      type="text"
      id="isim"
      value={formData.isim}
      onChange={(e)=>setFormData({...formData, isim: e.target.value})}
      minLength={3}
      required/>
      </div>

     <div className="form-group">
      <label>Pizza Boyutu:</label>
      <div className="radio-group">
        {["küçük","orta","büyük"].map((boyut)=>(
         <label key = {boyut}>
            <input
            type="radio"
            name="boyut"
            value={boyut}
            checked={formData.boyut === boyut}
            onChange={(e)=> setFormData({...formData,boyut: e.target.value})}
            />
            {boyut.charAt(0).toUpperCase()+boyut.slice(1)}
         </label>
        )) }
      </div>
     </div>
     <div className="form-group">
       <label>Malzemeler(4-10 arası seçim yapın):</label>
       <div className="checkbox-group">
        {malzemeSecenekleri.map((malzeme) => (
            <label key = {malzeme}>
                <input
                type="checbox"
                checked={formData.malzemeler.includes(malzeme)}
                onChange={()=>handleMalzemeChange(malzeme)}
                />
                {malzeme}
               </label>
        ))}
       </div>
     </div>

      <div className="form-group">
        <label htmlFor="notlar">Özel Notlar:</label>
        <textarea
        id="notlar"
        value={formData.notlar}
        onChange={(e)=>setFormData({...formData,notlar : e.target.value})}/>
      </div>

      <button 
      type="submit"
      disabled={
        formData.isim.length <3 ||
        formData.malzemeler.length < 4 ||
        formData.malzemeler.length > 10
      }
      >
        Sipariş Ver
      </button>
    </form>
   );
};
export default OrderForm;