import { useState , useEffect} from 'react';
import axios from "axios";
import './App.css';


function App() {

  
  
  const [data, setData]=useState([]);
  useEffect(()=> {
    const getProduct=async()=>{
      const res=await axios.get("http://localhost:5000/product");
      
      if(res.status===200){
          setData(res.data);
      }
      console.log(data);
  };
      getProduct();
  }, []);

  
  // const [inputValue, setInputValue] = useState('');

  /*const [data, setData]=useState([]);
    useEffect(()=> {
        getproduct();
    }, []);

    const getproduct=async()=>{
        const res=await axios.get("http://localhost:5000/product");
        
        if(res.status==="OK"){
            setData(res.data);
        }
        console.log(res.data);
      }*/
      /*useEffect(() => {
        const listProducts = async () => {
          try {
            const resp = await window.fetch('http://localhost:5000/product');
            const data = await resp.json();
            //const dataArray = Object.values(data.product);
            //console.log(dataArray[0])
            setProduct(data);

            console.log(data);
          } catch (error) {
            console.error('Verileri alma hatası:', error);
          }
        };
    
        listProducts();
      }, []);
       */
  return (
    <div className="App">
        <div className='table-wrapper'>
        <table>
            <thead>
               <tr>
                <th>id</th>
                <th>name</th>
                <th>category</th>
                </tr> 
            </thead>
            <tbody>
               {data&&data.map((item,index)=>(
                 <tr key={index}>
                 <td>{index}</td>
                 <td>{item.product.name}</td>
                 <td><div className='buttons'>
                     <button className="btn btn primary">View</button>
                     <button className="btn btn primary">Edit</button>
                     <button className="btn btn primary" >Delete</button>
                     </div></td>
             </tr>
               )
               )}
            
               
            </tbody>
        </table>
    </div>  
    </div>
  );
}

export default App;
