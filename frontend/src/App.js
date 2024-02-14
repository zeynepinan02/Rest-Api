
import './App.css';
import React, {useEffect, useState} from "react";


function App() {
 const [data1, setData]=useState([]);

  useEffect(() => {
    getProducts();
}, []);

const getProducts = async () => {
    try {
        const response = await window.fetch("http://localhost:5000/product");
        
        if (response.ok) { // HTTP yanıtı başarılı mı diye kontrol edin
            const data = await response.json(); // Yanıtı JSON olarak çözümleyin
            const array=Object.values(data.product);
            setData(array);
            console.log(data1); // Veriyi kontrol et
            
        } else {
            console.error("Ürünleri alma başarısız oldu.");
        }
    } catch (error) {
        console.error("Ürünleri alma sırasında bir hata oluştu:", error);
    }
};


/*const product = data1.map((item, index) => (
  <tr key={index}>
      <td>{item._id}</td>
      <td>{item.name}</td>
      <td>{item.category}</td>
      <td><div className="buttons">
               <button className="btn btn-primary">EDİT</button>
               <button className="btn btn-priimary">DELETE</button>
             </div></td>
  </tr>
));*/
  return (

    <div className="App">
      <table>
        <tr>
            <td>id</td>
            <td>Name</td>
            <td>Category</td>
        </tr>
        <tbody>
         {data1 && data1.map((item,index) => ( 
         <tr key={index}>
           <td>{item._id}</td>
           <td>{item.name}</td>
           <td>{item.category}</td>
           <td>
             <div className="buttons">
               <button className="btn btn-primary">EDİT</button>
               <button className="btn btn-priimary">DELETE</button>
             </div>
             
           </td>
         </tr>
       ))} 
      <div className="buttons">
               <button className="btn btn-primary">YENİ EKLE</button>
            
             </div>
      
       </tbody>
    </table>
    </div>
  );
};

export default App;

