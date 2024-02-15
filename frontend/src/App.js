
import './App.css';
import React, {useEffect, useState} from "react";
const initialState={
  name:"",
  category:"",
};
function App() {
 const [data1, setData]=useState([]);
 const [inputValue, setInputValue] = useState(initialState);
 const {name,category}=inputValue;

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

const handleInputChange = (event) => {
  setInputValue(event.target.value);
  console.log(inputValue);
};
const handleSubmit=(e)=>{
  e.preventDefault();
  if(!name||!category){
      window.confirm("Please full");
      return;
  }
  ;
};
const addProduct = async (name , category) => {
   
  await window.fetch('http://localhost:5000/product', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name , category})
  }).then(response => {
    console.log(response)
  });
  
  // Yeni kategori nesnesi oluşturma
  const newProduct = { name , category}; // Yeni kategori nesnesi

  // Mevcut kategori listesine yeni kategoriyi ekleyerek güncelleme yapma
  const updateProduct = [{...newProduct, name,category}];
  const response = await window.fetch("http://localhost:5000/product");
  const data = await response.json(); // Yanıtı JSON olarak çözümleyin
  const array=Object.values(data.product);
  setData(array);
  setInputValue(updateProduct);
  console.log(updateProduct);
};  
const deleteProduct = async (name) => {
   
  await window.fetch('http://localhost:5000/product', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name })
  }).then(response => {
    console.log(response)
  });

  const updated = data1.filter(item => item.name !== name);
  setData(updated);
};  

  return (

    <div className="App">
      <table>
        <tr>
            <td>Name</td>
            <td>Category</td>
        </tr>
        
        <tbody>
         {data1 && data1.map((item,index) => ( 
         <tr key={index}>
           <td>{item.name}</td>
           <td>{item.category}</td>
           <td>
             <div className="buttons">
               <button className="btn btn-primary">EDİT</button>
               <button className="btn btn-primary"onClick={() => deleteProduct(item.name)}>DELETE</button>
             </div>
             
           </td>
         </tr>
          
       ))} 
       <tr>
        <div>
       <input
        type="text"
        value={name}
        onChange={handleInputChange}
        placeholder="Bir öğe girin..."
      />
      <input
        type="text"
        value={category}
        onChange={handleInputChange}
        placeholder="Bir öğe girin..."
      />
      <button className="addButton" onSubmit={handleSubmit} onClick={() => addProduct(inputValue)}>Ekle</button>
    </div>
       </tr>
      
      </tbody>
    </table>
    </div>
  );
};

export default App;

