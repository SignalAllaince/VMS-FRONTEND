import { useState } from "react";
import { AdminListArr } from "../../utils";
import Backdrop from "../../widgets/backdrop";
import Select from "../../widgets/select/Select";

export default function AdminManagement() {
    const [showModal, setShowModal] = useState<boolean>(false)
  return (
    <div className="w-[80%] p-4 mt-4 min-h-screen ml-[18%] bg-white rounded-2xl">
      <div className="flex justify-between items-center ">
        <h2 className="text-xl leading-8 font-bold">Manage Admins</h2>
        <input
          className="py-2 px-4 rounded-lg bg-[#FAFAFF] focus:outline-none"
          type="search"
          name=""
          id=""
          placeholder="Search"
        />{" "}
      </div>
      <div className="w-full mt-8 flex justify-end items-center">
        <button className="py-2 px-4 rounded-lg bg-vms-primary text-white hover:scale-105 transition-all" onClick={()=>setShowModal(true)}>Add New Admin</button>
      </div>


      <div className="w-full mt-11">
      <table className=" w-full">
        <thead>
          <tr>
            <th className="py-3 text-sm font-semibold leading-[22px]">
              Visitor’s Name
            </th>
            <th className="py-3 text-sm font-semibold leading-[22px]">Date</th>
            <th className="py-3 text-sm font-semibold leading-[22px]">
              Check In Time
            </th>
            <th className="py-3 text-sm font-semibold leading-[22px]">
              Check Out Time
            </th>
          </tr>
        </thead>
        <tbody>
          {AdminListArr.map((admin, _) => (
            <tr
              key={_}
              className={`${_ % 2 === 0 ? "bg-[#FAFAFF]" : "bg-white"}`}
            >
              <td className="text-center text-sm leading-[22px] font-medium text-vms-dark py-3">
                {admin.admin_name}
              </td>
              <td className="text-center text-sm leading-[22px] font-medium text-vms-dark py-3">
                {admin.email_address}
              </td>
              <td className="text-center text-sm leading-[22px] font-medium text-vms-dark py-3">
                {admin.admin_type}
              </td>
              <td className={`${admin.status === "Active" ? "text-[#269B47]" : "text-[#B94B72]"} text-center text-sm leading-[22px] font-medium text-vms-dark py-3`}>
                {admin.status}
              </td>
              <td className="flex justify-end items-center px-4 py-3">
                <button className="mt-1 px-4 py-2 border border-vms-primary rounded-lg text-sm leading-[22px] text-vms-dark font-medium hover:bg-vms-primary hover:text-white hover:scale-105 transition-all">View </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    {
        showModal && (
            <Backdrop>
                <div className="w-[40%] p-4 bg-white rounded-xl">
                    <p className="text-lg font-semibold leading-[22px] text-vms-primary">Admin details</p>
                    <form action="" className="mt-4">
                        <div>
                            <label htmlFor="" className="text-xs font-medium leading-5 text-vms-primary">
                                Admin Name
                            </label>
                            <input type="text" className="w-full p-2 placeholder:text-xs rounded-[4px] border border-[#DADBF2] bg-white focus:outline-none" placeholder="Surname, First Name"/>
                        </div>

                        <div className="my-4">
                            <label htmlFor="" className="text-xs font-medium leading-5 text-vms-primary">
                            Admin Email Address                            </label>
                            <input type="text" className="w-full p-2 placeholder:text-xs rounded-[4px] border border-[#DADBF2] bg-white focus:outline-none" placeholder="Admin_01@gmail.com"/>
                        </div>

                        <div className="my-4">
                            <label htmlFor="" className="text-xs font-medium leading-5 text-vms-primary">
                                Admin Name
                            </label>
                            <Select selectOptions= {["Super Admin", "Admin"]}/>
                        </div>

                        <div className="my-4">
                            <label htmlFor="" className="text-xs font-medium leading-5 text-vms-primary">
                                Admin Name
                            </label>
                            <Select selectOptions= {["Active", "Inactive"]}/>
                        </div>

                        <div className="w-full flex justify-end items-center gap-4">
                          <button className="py-2 px-4 rounded-lg border border-vms-primary text-vms-primary text-sm bg-white hover:scale-105 transition-all" onClick={()=>setShowModal(false)}>Close</button>
                          <button className="py-2 px-4 rounded-lg border bg-vms-primary text-sm text-white hover:scale-105 transition-all">Add New Admin</button>
                        </div>
                    </form>
                </div>
            </Backdrop>
        )
    }
    </div>
  );
}
