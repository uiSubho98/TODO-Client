import React, { useRef, useState } from 'react';
import './Login.css'
import {FcGoogle} from 'react-icons/fc'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {  useAuthState,  useSendPasswordResetEmail,  useSignInWithEmailAndPassword,  useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
const Login = () => {
    const [signInWithGoogle, loading1, errorgGoogle] = useSignInWithGoogle(auth);
  const [error4,setError]=useState('')
  const navigate = useNavigate()
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(
    auth
  );
  const [
    signInWithEmailAndPassword,
    user1,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const location=useLocation();
  const emailRef=useRef('')
  const from = location.state?.from?.pathname || '/'

  const [user] = useAuthState(auth);

  const handleSignIn = () =>{
    signInWithGoogle()
  }

  const handleLogIn=(event) =>{
    event.preventDefault()
    const email= event.target.email.value;
    const password= event.target.password.value;
    signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    // if(user || userGit){
    //   navigate('/home')
    // }
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setError('Unauthorized Access')
    // ..
  });
  }

  if(user || user1){
    navigate('/home');
  }

  const handleReset=async()=>{
    const email=emailRef.current.value
    console.log(typeof email)
   if(!email){
    alert("Please Enter Your Email");
   }
   else{
    await sendPasswordResetEmail(email)
    alert("Please Check Your Email");
   }
  }

    return (
       <div>
           <h2 className='text-5xl text-center'>Login</h2>

              
<form className='w-80 mx-auto mt-5 shadow-2xl' onSubmit={handleLogIn}>
<div class="mb-6">
<label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
<input type="email" name='email' id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required=""/>
</div>
<div class="mb-6">
<label for="password" name='password' class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
<input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
</div>
<div class="flex items-start mb-6">
<div class="flex items-center h-5">
<input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required=""/>
</div>
<label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
</div>

<h2 className='w-20 mx-auto'>Login  Via <FcGoogle className='text-3xl  mx-auto mt-2 ' onClick={handleSignIn}></FcGoogle> </h2>
<br/>
<div>
    <h2 onClick={handleReset}>ForgotPassword?</h2>
    <h2><Link to='/signup'>Create Account</Link></h2>
</div>

<button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
</form>

       </div>
    );
};

export default Login;