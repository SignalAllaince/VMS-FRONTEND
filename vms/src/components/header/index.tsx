import { useLocation } from "react-router-dom"

export default function Header() {
  const location = useLocation()

  const pageName = location.pathname.split('/')
  return (
    <div className="w-[80%] py-8 ml-[18%] bg-white rounded-2xl text-vms-primary flex justify-between items-center px-8">
      <p className="text-3xl font-bold leading-6">{!pageName[1] ? "Dashboard" : pageName[1]}</p>
      <p className="px-4 py-2 rounded-lg bg-[#FAFAFF] text-sm font-semibold leading-6">Admin_001</p>
    </div>
  )
}
