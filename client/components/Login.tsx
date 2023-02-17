import React, { useContext } from "react";
import {PopUpContext} from '../context/LoginPopUpContext'
import { signIn, signOut } from "next-auth/react"

const Login = () => {
  const loginPopUp = useContext<{ popUp: boolean, displayPopUp: () => void } | null>(PopUpContext);

  function googleSignInHandler():void{
    signIn();
  }
  function closePopUp():void{
    loginPopUp?.displayPopUp();
  }
  return (
    <>
      {loginPopUp?.popUp && (
        <div className=" absolute top-1/3 left-1/2 -translate-x-1/2 bg-slate-100 w-[60%] rounded-lg ">
          <div className="grid grid-cols-2">
            <div className="">
              <img
                className="w-64 object-center rounded-tl-lg rounded-bl-lg"
                src="https://images.unsplash.com/photo-1676486540030-58f013fa8186?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                alt="login-img"
              />
            </div>
            <div className="realtive">
            <button className="border-2 border-gray-800 relative top-1/2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-lg" onClick={googleSignInHandler}>Google</button>
            <button className="absolute top-3 right-4 border-2 border-gray-400 py-1 px-4 rounded-lg hover:bg-red-600 hover:text-white" onClick={closePopUp}>close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
