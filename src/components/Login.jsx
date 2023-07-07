import React from 'react'
import { useRef } from "react";
import loginimg from '../assets/login-img.png'
import axios from 'axios';
import Swal from "sweetalert2";

import {useNavigate} from 'react-router-dom';

export default function Login() {
 
  let emailRef = useRef();
  let passRef = useRef();
  let navigate=useNavigate();
  let goToForgotPassword= () =>{
    navigate("/forgot-password");
  };
 

  let sendQuery = async (event) => {
    event.preventDefault();
      try {
    
        
        let { data } = await axios.post('https://x8ki-letl-twmt.n7.xano.io/api:XooRuQbs/auth/login', {
            email: emailRef.current.value,
            password: passRef.current.value
          });
          console.log(data);
        if (data.authToken) {

          console.log("success");
          let token = data.authToken;
          localStorage.setItem("auth_token", token);
            Swal.fire({
                icon: "success",
                title: "Login successful",
            }).then(() => {
                window.location.assign("/form");
                
            });
        }
        else {
            Swal.fire({
                icon: "error",
                title: "Account not found",
            })
        }

    }
    catch (error) {
        // alert("error");
        // console.log(error);
        Swal.fire({
          icon: "error",
          title: "Account not found",
      })
    }
  }
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block'>
            <img className='w-full h-full object-cover' src={loginimg} alt="" />
        </div>

        <div className='bg-gray-800 flex flex-col justify-center'>
            <form className='max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8'>
                <h2 className='text-4xl dark:text-white font-bold text-center'>SIGN IN</h2>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Email</label>
                    <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="email" ref={emailRef} />
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Password</label>
                    <input className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" ref={passRef}/>
                </div>
                <div className='flex justify-between text-gray-400 py-2'>
                    <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
                    <p onClick={() => goToForgotPassword()}>Forgot Password</p>
                </div>
                <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg' onClick={sendQuery}>SIGN IN</button>
                
            </form>
        </div>
    </div>
  )
}
