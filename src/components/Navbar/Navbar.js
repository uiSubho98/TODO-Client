import React from 'react';
import { Link } from 'react-router-dom';
import {FaUser} from 'react-icons/fa'
import CustomLink from "../CustomLink/CustomLink";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/Firebase.init";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  
    return (
        <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">To-Do-Task</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0">
      <li><Link to='/home'>Home</Link></li>
      <li>{
                    user?<span>
                    <button onClick={()=>logout()} className='ms-1 signOut'><span className='text-danger'>SignOut</span></button>
                    </span>: <CustomLink to='/login'>Sign In</CustomLink>
                    
                    }</li>
    </ul>
  </div>
</div>
    );
};

export default Navbar;