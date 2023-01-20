import React, { useState ,useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Login() {
  const[username,usernameupdate]=useState('');
  const[password,passwordupdate]=useState('');
  useEffect(() => {
    sessionStorage.clear()
    
  }, [])
  

  const usenavigate=useNavigate();

  const ProceedLogin=(e)=>{
    e.preventDefault();
    if(validate()){
      //console.log('proceed')
      fetch('http://localhost:8000/user/'+username).then((res)=>{
        return res.json();
      }).then((resp)=>{
        console.log(resp)
        if(Object.keys(resp).length===0){
          toast.error('Please enter valid user')
        }else{
          if(resp.password===password){
            toast.success('success')
            sessionStorage.setItem('username',username);
            usenavigate('/')

          }else{
            toast.error('Please enter valid credentials')
          }
        }
      }).catch((err)=>{
        toast.error('Login failed due to: '+err.message)
      })
    }
  }
  const validate=()=>{
    let result=true;
    if(username==='' || username===null){
      result=false;
      toast.warning('Please enter Username')
    }
    if(password==='' || password===null){
      result=false;
      toast.warning('Please enter Username')
    }
    return result;

  }
  return (
    <div className='row'>
      <div className='offset-lg-3 col-lg-6'>
        <form onSubmit={ProceedLogin} className='container'>

          <div className='card'>
            <div className='card-header'>
              <h2>User Login</h2>
            </div>

            <div className='card-body'>
              <div className='form-group'>
                <label>User Name <span className='errmsg'>*</span></label>
                <input value={username} onChange={e=>usernameupdate(e.target.value)} className='form-control'></input>
              </div>

            </div>
            <div className='card-body'>
              <div className='form-group'>
                <label>Password<span className='errmsg'>*</span></label>
                <input type='password' value={password} onChange={e=>passwordupdate(e.target.value)} className='form-control'></input>
              </div>

            </div>
            <div className='card-footer'>
              <button type='submit' className='btn btn-primary'>Login</button>
              <Link className='btn btn-secondary' to={'/Register'}>New User</Link>

            </div>
          </div>


        </form>

      </div>

    </div>
  )
}
