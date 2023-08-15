import { loginbg, logo } from "../../assets";
import {BiUserCircle} from 'react-icons/bi'
import {AiFillLock} from 'react-icons/ai'
export default function Login() {
  return (
    <div className="relative w-full min-h-screen flex flex-col gap-3 justify-center items-center">

      <div className="relative z-30">
        <img src={logo} alt=""/>
      </div>

      <div className="w-[36rem] rounded-xl bg-white p-12 relative z-30 shadow-[0px_0px_24px_0px_rgba(0,0,0,0.05)]">
        <h1 className="text-center text-vms-darkest text-2xl font-extrabold">Admin Login</h1>

        <form action="" className="mt-[3.25rem]">
          
          <div>
              <label htmlFor="" className="text-block  text-md text-medium leading-6 text-vms-darkest">Username</label>
            <div className="w-full border pl-4 border-vms-darkest rounded-lg flex justify-start gap-3 items-center">
              <BiUserCircle size={30} className="text-vms-darkest"/>
            <input className="w-full text-vms-darkest bg-transparent py-3 focus:outline-none" type="text" />
          </div>
          </div>
          
          <div className="mt-4">
                      <label htmlFor="" className="text-block text-md text-medium leading-6 text-vms-darkest">Password</label>
            <div className="w-full border pl-4 border-vms-darkest rounded-lg flex justify-start gap-3 items-center">
              <AiFillLock size={30} className="text-vms-darkest"/>
            <input className="w-full text-vms-darkest bg-transparent py-3 focus:outline-none" type="text" />
          </div>
          </div>
          <p className="text-vms-darkest text-sm leading-[18px] font-semibold">Forgot Password</p>

          <button className="w-full py-3 px-4 bg-vms-darkest text-white text-md font-semibold leading-6 rounded-lg mt-9 hover:scale-105 transition-all">LOGIN</button>
        </form>
      </div>
        
        <div className="absolute left-0 top-0 w-full h-screen z-10 ">
          <img src={loginbg} className="w-full h-full object-cover" alt=''/>
        </div>

        <div className="absolute bg-[#141533e7]  left-0 top-0 w-full h-screen z-20 ">
        </div>

    </div>
  )
}
