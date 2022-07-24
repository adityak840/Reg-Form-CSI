import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import { useState } from 'react';

function App() {

  const [name, setname]= useState('');
const [email, setemail]= useState('');
const [password, setpassword]= useState('');
const [confirmPassword, setconfirmPassword]= useState('');
const [number, setnumber]= useState('');
const [isVITian, setisVITian] = useState('no');


const handleSubmit=async (event)=>{
  event.preventDefault()
  const URL= 'http://127.0.0.1:8000/users/signup';
  const config = {
    headers:{
      'Content-type':'application/json'
    }
  }
  const data=await axios.post(URL, {'name':name, 'email':email, "password":password, "confirmPassword":confirmPassword, "phoneNo": number, "isVITian": isVITian}, config)
  console.log(data)
}
  return (
    <div className="form_wrapper">
        <div className="form_container">
          <div className="title_container">
            <h2>Trial Registration Form</h2>
          </div>
          <div className="row clearfix">
            <div className="">
              <form onSubmit={handleSubmit}>
                <div className="input_field"> <span><i aria-hidden="true" className="fa fa-envelope"></i></span>
                  <input type="email" name="email" placeholder="Email" onChange={(elem)=>{setemail(elem.target.value)}} required />
                </div>
                <div className="input_field"> <span><i aria-hidden="true" className="fa fa-lock"></i></span>
                  <input type="password" name="password" placeholder="Password" onChange={(elem)=>{setpassword(elem.target.value)}} required />
                </div>
                <div className="input_field"> <span><i aria-hidden="true" className="fa fa-lock"></i></span>
                  <input type="password" name="password" placeholder="Re-type Password" onChange={(elem)=>{setconfirmPassword(elem.target.value)}} required />
                </div>
                <div className="row clearfix">
                  <div className="col_half">
                    <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user"></i></span>
                      <input type="text" name="name" placeholder="Name" onChange={(elem)=>{setname(elem.target.value)}} />
                    </div>
                  </div>
                  <div className="col_half">
                    <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user"></i></span>
                      <input type="text" name="name" placeholder="Number" onChange={(elem)=>{setnumber(elem.target.value)}} required />
                    </div>
                  </div>
                </div>
                    <div className="input_field radio_option">
                      <div className="input_field radio_option text">From VIT?</div>
                      <input type="radio"name="radiogroup1" id='rd1'></input>
                      <label for="rd1">Yes</label>
                      <input type="radio"name="radiogroup1" id='rd2'></input>
                      <label for="rd2">No</label>
                    </div>
                  <div className="input_field checkbox_option">
                      <input type="checkbox" id="cb1" />
                      <label for="cb1">csi  terms and conditions </label>
                  </div>
                  <div className="input_field checkbox_option">
                      <input type="checkbox" id="cb2" />
                      <label for="cb2">jeez csi </label>
                  </div>
                <input className="button" type="submit" value="Register" />
              </form>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
