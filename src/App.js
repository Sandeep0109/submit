import React, { useState } from 'react';
import axios from 'axios'
import './index.css'
const App = () => {

  const handleSubmit=async(e)=>{
  try {
    if(!name ||!email ||!password ||!address||!mob||!gender||!cars){
      return alert('Please enter all field')
    }
    const data=await axios.post('http://localhost:8000',{
    "name":name,
    "password":password,
    "address":address,
    "email":email,
    "mob":mob,
    "gender":gender,
    "car":cars

})
if(data.status==200){
  

  alert('Success')
}else{
  alert('not registerd')
}
console.log(data.status)
  } catch (error) {
    
  }
  // console.log(data)
  //   console.log(name)
  //   console.log(password)
  //   console.log(email)
  //   console.log(mob)
  //   console.log(gender)
  //   console.log(address) 
  //   console.log(cars)
    
    
};
const[name,setName]=useState()
const[password,setPassword]=useState()

const[address,setAddress]=useState()

const[email,setEmail]=useState()

const[mob,setMob]=useState()

const [gender,setGender]=useState();
const [cars,setCars]=useState();
  return (
    <div className="container">
      <div className="maindiv">
        <h1>Form</h1>
        </div>
      <div>
      <div>
                <label className="public">Name</label><br></br>
                <input className="label" type="text" name="name" id="name" onChange={(e)=>setName(e.target.value)}/>
           </div>
      </div>
     
     <div>
     <label className="public"for="password">Password:</label><br/>
  <input type="text" id="password" name="password" onChange={(e)=>setPassword(e.target.value)}/><br></br>
     </div>
   
   <div>
   <label className='public' for="address">Address:</label><br/>
   <input type="text" id="address" name="address" onChange={(e)=>setAddress(e.target.value)}/><br></br>
   </div>
   
   <div>
   <label className="public"for="email">Email:</label><br/>
   <input type="text" id="email" name="email" onChange={(e)=>setEmail(e.target.value)}/><br></br>
   </div>
   
   <div>
   <label className="public"for="mob">Mob:</label><br/>
   <input type="text" id="mob" name="mob" onChange={(e)=>setMob(e.target.value)}/><br></br>
   </div>

   
   <div >
                 <label className="public">Gender</label><br></br>
                 <input  className="label"type="radio" id="male" name="fav_language" value="male" onChange={(e)=>setGender(e.target.value)}/>
                 <label className="name">Male</label>
                 <input className="label" type="radio" id="female" name="fav_language" value="female" onChange={(e)=>setGender(e.target.value)}/>
                 <label className="name">Female</label>
           </div>

  <div>
  <label className="public"for="cars">Choose a car:</label>

<select name="cars" id="cars" onClick={(e)=>setCars(e.target.value)} >
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
  </div>

  <button onClick={handleSubmit}>Submit</button>
  

    </div>
  )
}

export default App

