import React,{ useState ,useContext} from "react";
import { useRouter } from "next/router";
import {PopUpContext} from '../context/LoginPopUpContext'
import { useSession } from "next-auth/react";


const Start = () => {

  const {data:session,status} = useSession();
  const router = useRouter();
  const [roomName, setRoomName] = useState("");
  const loginPopUp = useContext<{ popUp: boolean, displayPopUp: () => void } | null>(PopUpContext);
  const joinRoom = () => {
    if(!session){
      loginPopUp?.displayPopUp();
      return
    }
    router.push(`/room/${roomName || Math.random().toString(36).slice(2)}`);
  };

  return (
    <main className="h-screen bg-gradient-to-tr from-fuchsia-400 to-yellow-300 flex flex-col justify-center items-center">
      <h1 className="text-2xl uppercase mb-5 font-semibold ">Lets join a room!</h1>
      <input className="rounded-lg h-12 w-52 px-5 text-lg mb-5 focus:bg-slate-50" onChange={(e) => setRoomName(e.target.value)} value={roomName} />
      <button className="border-2 border-black px-4 py-1 bg-gradient-to-tr from-fuchsia-400 to-yellow-200 text-sm font-semibold rounded-md  hover:text-white hover:bg-cyan-400 hover:scale-110 transition ease-in-out" onClick={joinRoom} type="button">
        Join Room
      </button>
    </main>
  );
};

export default Start;
