import {useState} from "react";
import axios from "axios";
const initialState={
    name:"",
    category:"",
};
export const AddEdit = () => {
    const [data, setData]=useState(initialState);
    const {name,category}=data;
    const createUser=async(data)=>{
        const res=await axios.post("http://localhost:5000/users/",data);
        if(res.status===200){
            window.confirm(res.data);
        }
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!name||!category){
            window.confirm("Please full");
            return;
        }
        createUser(data);
    };

    const handleInputChange=(e)=>{
        const{name,value}=e.target;
        setData({...data, [name]: value});
    };
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
                <label htmlFor="name">Name</label>
                <input
                type="text"
                id="name"
                name="name"
                placeholder="enter a name"
                onChange={handleInputChange}
                value={name}/>
            </div>
            <div className="input-wrapper">
                <label htmlFor="category">Category</label>
                <input
                type="text"
                id="category"
                name="category"
                placeholder="enter a category"
                onChange={handleInputChange}
                value={category}/>
            </div>
            <input type="submit" value="Add"/>
        </form>
    </div>
  )
}
