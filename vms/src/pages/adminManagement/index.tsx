/* eslint-disable @typescript-eslint/ban-types */
import { useState } from "react";
import { AdminListArr } from "../../utils";
import Backdrop from "../../widgets/backdrop";
import Select from "../../widgets/select/Select";
import { AdminList } from "../../types";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function AdminManagement() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalType, setModalType] = useState<string>("");
  const [editFormData, setEditFormData] = useState<AdminList | null>()

  console.log(editFormData)
  return (
    <div className="w-[80%] p-4 mt-4 min-h-screen ml-[18%] bg-white rounded-2xl">
      <div className="flex justify-between items-center ">
        <h2 className="text-xl leading-8 text-vms-primary font-bold">Manage Admins</h2>
        <input
          className="py-2 px-4 w-[35%] rounded-lg bg-[#FAFAFF] focus:outline-none"
          type="search"
          name=""
          id=""
          placeholder="Search"
        />{" "}
      </div>
      <div className="w-full mt-8 flex justify-end items-center">
        <button
          className="py-2 px-4 rounded-lg bg-vms-primary text-white hover:scale-105 transition-all"
          onClick={() => {
            setModalType("add");
            setShowModal(true);
          }}
        >
          Add New Admin
        </button>
      </div>

      <div className="w-full mt-11">
        <table className=" w-full">
          <thead>
            <tr>
              <th className="py-3 text-sm font-semibold leading-[22px]">
                Visitor’s Name
              </th>
              <th className="py-3 text-sm font-semibold leading-[22px]">
                Date
              </th>
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
                <td
                  className={`${
                    admin.status === "Active"
                      ? "text-[#269B47]"
                      : "text-[#B94B72]"
                  } text-center text-sm leading-[22px] font-medium py-3`}
                >
                  {admin.status}
                </td>
                <td className="flex justify-end items-center px-4 py-3">
                  <button
                    className="mt-1 px-4 py-2 border border-vms-primary rounded-lg text-sm leading-[22px] text-vms-primary font-medium hover:bg-vms-primary hover:text-white hover:scale-105 transition-all"
                    onClick={() => {
                      setModalType("edit");
                      setEditFormData(admin)
                      setShowModal(true);
                    }}
                  >
                    View{" "}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="w-full p-4 mt-8 flex justify-end items-center">
        <div className="flex justify-start gap-5 items-center">
                <button className="py-1 px-2 text-sm text-vms-darkest border border-[#DADBF2] opacity-50 flex justify-center gap-2 items-center rounded-[4px]">
                  <IoIosArrowBack />
                  Previous
                </button>
                <div className="px-4 border border-[#DADBF2] text-vms-darkest">
                  1
                </div>
                <p className="text-sm text-vms-darkest">of 3</p>
                <button className="py-1 px-2 text-sm text-vms-darkest border border-[#DADBF2] flex justify-center gap-2 items-center rounded-[4px]">
                  Next
                  <IoIosArrowForward />
                </button>
              </div>
        </div>
      </div>
      {showModal && (
        <Backdrop>
          {modalType === "add" ? (
            <div className="w-[40%] p-4 bg-white rounded-xl">
              <p className="text-lg font-semibold leading-[22px] text-vms-primary">
                Admin details
              </p>
              <form action="" className="mt-4">
                <div>
                  <label
                    htmlFor=""
                    className="text-xs font-medium leading-5 text-vms-primary"
                  >
                    Admin Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 text-xs placeholder:text-xs rounded-[4px] border border-[#DADBF2] bg-white focus:outline-none"
                    placeholder="Surname, First Name"
                  />
                </div>

                <div className="my-4">
                  <label
                    htmlFor=""
                    className="text-xs font-medium leading-5 text-vms-primary"
                  >
                    Admin Email Address{" "}
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 text-xs placeholder:text-xs rounded-[4px] border border-[#DADBF2] bg-white focus:outline-none"
                    placeholder="Admin_01@gmail.com"
                  />
                </div>

                <div className="my-4">
                  <label
                    htmlFor=""
                    className="text-xs font-medium leading-5 text-vms-primary"
                  >
                    Admin Name
                  </label>
                  <Select selectOptions={["Super Admin", "Admin"]} />
                </div>

                <div className="my-4">
                  <label
                    htmlFor=""
                    className="text-xs font-medium leading-5 text-vms-primary"
                  >
                    Admin Name
                  </label>
                  <Select selectOptions={["Active", "Inactive"]} />
                </div>

                <div className="w-full flex justify-end items-center gap-4">
                  <button
                    className="py-2 px-4 rounded-lg border border-vms-primary text-vms-primary text-sm bg-white hover:scale-105 transition-all"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button className="py-2 px-4 rounded-lg border bg-vms-primary text-sm text-white hover:scale-105 transition-all">
                    Add New Admin
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="w-[40%] p-4 bg-white rounded-xl">
                            <form action="" className="mt-4">
                <div>
                  <label
                    htmlFor=""
                    className="text-xs font-medium leading-5 text-vms-primary"
                  >
                    Admin Name
                  </label>
                  <input
                    type="text"
                    value={editFormData?.admin_name}
                    className="w-full p-2 placeholder:text-xs text-xs rounded-[4px] border border-[#DADBF2] bg-white focus:outline-none"
                    placeholder="Surname, First Name"
                  />
                </div>

                <div className="my-4">
                  <label
                    htmlFor=""
                    className="text-xs font-medium leading-5 text-vms-primary"
                  >
                    Admin Email Address{" "}
                  </label>
                  <input
                    type="text"
                    value={editFormData?.email_address}
                    className="w-full p-2 placeholder:text-xs text-xs rounded-[4px] border border-[#DADBF2] bg-white focus:outline-none"
                    placeholder="Admin_01@gmail.com"
                  />
                </div>

                <div className="my-4">
                  <label
                    htmlFor=""
                    className="text-xs font-medium leading-5 text-vms-primary"
                  >
                    Admin type
                  </label>
                  <Select value={editFormData?.admin_type} selectOptions={["Super Admin", "Admin"]} />
                </div>

                <div className="my-4">
                  <label
                    htmlFor=""
                    className="text-xs font-medium leading-5 text-vms-primary"
                  >
                    Admin status
                  </label>
                  <Select value={editFormData?.status} selectOptions={["Active", "Inactive"]} />
                </div>

                <div className="w-full flex justify-end items-center gap-4">
                  <button
                    className="py-2 px-4 rounded-lg border border-vms-primary text-vms-primary text-sm bg-white hover:scale-105 transition-all"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button className="py-2 px-4 rounded-lg border bg-vms-primary text-sm text-white hover:scale-105 transition-all">
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          )}
        </Backdrop>
      )}
    </div>
  );
}
