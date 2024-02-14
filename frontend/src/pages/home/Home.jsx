import { useState , useEffect} from 'react';

import axios from "axios";

export const Home = () => {
    const [data, setData]=useState([]);
    useEffect(()=> {
        getUsers();
    }, []);

    const getUsers=async()=>{
        const res=await axios.get("http://localhost:5000/users");
        
        if(res.status===200){
            setData(res.data);
        }
        console.log(res.data);
    };
    /**const onDeleteUser=async(id)=>{
        if(window.confirm("sure")){
            const res=await axios.delete(`http://localhost:5000/users/${id}`);
            if(res.status===200){
                getUsers();
            }
        }
    };*/
  return (
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
               {data&& data.map((user,index)=>(
                 <tr key={user.id}>
                 <td>{index+1}</td>
                 <td>{user.name}</td>
                 <td>{user.category}</td>
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
  )
};
//onClick={()=>onDeleteUser(user.id)}