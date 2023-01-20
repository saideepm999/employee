import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

export default function Register() {
    const [id,idChange]=useState('');
    const [fullname,fullnameChange]=useState('');
    const [password,passwordChange]=useState('');
    const [phonenum,phonenumChange]=useState('');
    const [email,emailChange]=useState('');
    const [country,countryChange]=useState('India');
    const [address,addressChange]=useState('');
    const [gender,genderChange]=useState('male');

    const navigate=useNavigate();
    const Isvalidate=()=>{
        let isproceed=true;
        let errormessage='Please fill the details : ';
        if (id===null || id===''){
            isproceed=false;
            errormessage += 'username '
        }
        if (fullname===null || fullname===''){
            isproceed=false;
            errormessage += 'fullname '
        }
        if (email===null || email===''){
            isproceed=false;
            errormessage += 'email '
        }
        if (phonenum===null || phonenum===''){
            isproceed=false;
            errormessage += 'Phone number '
        }
        if (password===null || password===''){
            isproceed=false;
            errormessage += 'password '
        }
        if(!isproceed){
            toast.warning(errormessage)
        }
        else{
            if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)){

            }else{
                isproceed = false;
                toast.warning('Please enter the valid email')
            }
        }
        return isproceed;
    }

    const handleSubmit=(e)=>{
        
        e.preventDefault();
        let regobj={id,fullname,password,phonenum,email,country,address,gender};
        if (Isvalidate()){
        //console.log(regobj);

        fetch(" http://localhost:8000/user",{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(regobj)
        }).then((response)=>{
            toast.success('Registration successfull');
            navigate('/login')

        }).catch((err)=>{
            toast.error('failed :'+err.message);

        });
    }
    }
  return (
    <div className="offset-lg-3 col-lg-6">
        <form className='container' onSubmit={handleSubmit}>
            <div className="card">
                <div className='card-header'>
                    <h1>User Registration</h1>
                </div>
                <div className='card-body'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='form-group'>
                                <label>Username <span className='errmsg'>*</span></label>
                                <input value={id} onChange={e=>idChange(e.target.value)} className='form-control'></input>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='form-group'>
                                <label>Password <span className='errmsg'>*</span></label>
                                <input value={password} onChange={e=>passwordChange(e.target.value)} type='password' className='form-control'></input>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='form-group'>
                                <label>Fullname <span className='errmsg'>*</span></label>
                                <input value={fullname} onChange={e=>fullnameChange(e.target.value)} className='form-control'></input>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='form-group'>
                                <label>Email <span className='errmsg'>*</span></label>
                                <input value={email} onChange={e=>emailChange(e.target.value)} className='form-control'></input>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='form-group'>
                                <label>Phone number <span className='errmsg'>*</span></label>
                                <input value={phonenum} onChange={e=>phonenumChange(e.target.value)} className='form-control'></input>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='form-group'>
                                <label>Country <span className='errmsg'>*</span></label>
                                <select value={country} onChange={e=>countryChange(e.target.value)} className='form-control'>
                                    <option value='India'>India</option>
                                    <option value='US'>Us</option>
                                    <option value='Uk'>Uk</option>
                                    <option value='Singapore'>Singapore</option>
                                </select>
                            </div>
                        </div>
                        <div className='col-lg-12'>
                            <div className='form-group'>
                                <label>Address </label>
                                <textarea value={address} onChange={e=>addressChange(e.target.value)} className='form-control'></textarea>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='form-group'>
                                <label>Gender </label>
                                <br></br>
                                <input type='radio' checked={gender==='male'} onChange={e=>genderChange(e.target.value)} value='male' className=' app-check'></input>
                                <label>Male</label>
                                <input type='radio' checked={gender==='female'} onChange={e=>genderChange(e.target.value)}  value='female' className=' app-check'></input>
                                <label>female</label>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='card-footer'>
                    <button type='submit' className='btn btn-primary'>Register</button>
                    <Link className='btn btn-danger' to={'/Login'}>Back</Link>
                </div>

            </div>

        </form>

    </div>
  )
}
