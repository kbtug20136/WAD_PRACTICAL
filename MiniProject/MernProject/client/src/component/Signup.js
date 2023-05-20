import React, {useState} from 'react'

import {useNavigate} from 'react-router-dom';
const Signup = () => {
    const navigate  =  useNavigate();
    const [user, setUser] = useState({
        name:"",email:"",phone:"",password:"",cpassword:""
    });
    let name, value;
    const handleInputs = (e) => {
        console.log(e);
        name= e.target.name;
        value= e.target.value;

        setUser({...user, [name]:value})

    }

    const PostData = async (e) =>{
        e.preventDefault();

        const { name, email, phone, password, cpassword} = user;

       const res = await fetch('/register', {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"

        },
        body:JSON.stringify({
            name, email, phone, password, cpassword
        })

       });

       const data = await res.json();

       if(res.status == 422 || !data){
        window.alert("Invalid Registeration");
        console.log("Invalid Registeration");
       }else{
        window.alert("Successful Registeration");
        console.log("Successful Registeration");
        navigate("../", { replace: true });

       }
    }

return (

    <div className="container">
      <form method='POST'>
        <h2>Sign Up</h2>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required value={user.name}
          onChange={handleInputs}/>
          
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required  value={user.email}
          onChange={handleInputs}/>
          
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required value={user.password}
          onChange={handleInputs} />
          
        </div>
        <div className="form-group">
          <label htmlFor="cpassword">Confirm-Password:</label>
          <input type="password" id="cpassword" name="cpassword" required value={user.cpassword}
          onChange={handleInputs} />
          
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input type="number" id="phone" name="phone" required value={user.phone}
          onChange={handleInputs} />
          
        </div>
        <div className="form-group">
          <button type="submit" onClick={PostData}>Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default Signup