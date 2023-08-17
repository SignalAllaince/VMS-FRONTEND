import { BiSort } from "react-icons/bi";
import { statusArr } from "../../utils";
import { useState } from "react";
import Table from "../table";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import DateSelect from "../../widgets/date";
import Backdrop from "../../widgets/backdrop";

interface VisitorStatusProps {
  page?: string;
}
export default function VisitorStatus({ page }: VisitorStatusProps) {
  // const [fromDate, setFromDate] = useState<Date | null>(null);
  const [active, setActive] = useState<number>(1);
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <div className="w-full p-6 bg-white mt-4 rounded-2xl">
      <div className="flex justify-between items-center">
        <h2 className="text-xl text-vms-primary leading-6 font-bold">Visitors Status</h2>
        {page === "Visitors" ||
          (page === "report" && (
            <input
              className="py-2 px-4 rounded-lg bg-[#FAFAFF] focus:outline-none"
              type="search"
              name=""
              id=""
              placeholder="Search"
            />
          ))}
      </div>
      <div className="flex mt-9 justify-between items-center">
        <div className="flex justify-start items-center gap-4">
          {statusArr.map((status, _) => (
            <div
              key={_}
              className={`${
                _ === active
                  ? "bg-vms-primary text-white"
                  : "bg-white text-vms-darkest"
              } text-md cursor-pointer px-4 py-2 border border-vms-primary font-medium leading-6 rounded-lg`}
              onClick={() => setActive(_)}
            >
              {status}
            </div>
          ))}
        </div>

        <div className="flex justify-start gap-5 items-center">
          <div className="px-4 cursor-pointer py-2 flex justify-between items-center border border-[#DADBF2] rounded-lg text-sm text-vms-darkest">
            <BiSort />
            <p>Sort</p>
          </div>

          {page === "Visitors" && (
            <div className="px-4 cursor-pointer py-2 flex justify-between items-center bg-vms-primary rounded-lg text-sm text-white">
              <p>Export Result</p>
            </div>
          )}
        </div>
      </div>

      {page === "Visitors" && (
        <div className="flex justify-start items-center gap-3 mt-6">
          <p className="text-sm font-medium leading-[22px] text-[#505173]">
            Date Range
          </p>
          <div className="flex justify-center gap-5 items-center">
            <DateSelect
              className="border-vms-primary border w-full items-center rounded-lg text-lg p-2"
              placeholderText="Filter by date"
              // selected={expiryDate}
              // onChange={(date) => {
              // setExpiryDate(date);
              // }}
              maxDate={new Date()}
            />
            <p>-</p>
            <DateSelect
              className="border-vms-primary border w-full items-center rounded-lg text-lg p-2"
              placeholderText="Filter by date"
              // selected={expiryDate}
              // onChange={(date) => {
              // setExpiryDate(date);
              // }}
              maxDate={new Date()}
            />
          </div>
          <button className="px-4 py-2 bg-vms-primary rounded-lg text-sm font-medium text-white">
            Apply
          </button>
        </div>
      )}

      {page !== "report" && <Table setShowModal={setShowModal} />}

      {page !== "report" && (
        <div>
          {page !== "Visitors" ? (
            <div className="flex justify-between items-center mt-11">
              <p className="flex justify-start gap-3 items-center text-dark text-xs font-medium">
                <AiOutlineInfoCircle />
                Showing only 50 most recents
              </p>

              <div className="flex justify-start gap-5 items-center">
                <button className="py-1 px-2 text-sm text-vms-darkest border border-[#DADBF2] opacity-50 flex justify-center gap-2 items-center rounded-[4px]">
                  <IoIosArrowBack />
                  Previous
                </button>
                <button className="py-1 px-2 text-sm text-vms-darkest border border-[#DADBF2] flex justify-center gap-2 items-center rounded-[4px]">
                  Next
                  <IoIosArrowForward />
                </button>
              </div>
            </div>
          ) : (
            <div className="flex justify-between items-center mt-11">
              <p className="text-xs text-[#505173] font-medium leading-5">
                Showing 1 - 13 of 42
              </p>
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
          )}
        </div>
      )}

      {showModal && (
        <Backdrop>
          <div className="w-[50%] p-8 bg-white rounded-3xl">
            <h2 className="text-xl font-bold leading-6 text-vms-primary">Visitors Status</h2>
            <p className="mt-8 font-semibold text-vms-primary">Visitor’s Information</p>

            <div className="my-3">
              <h2 className="text-xs font-semibold text-vms-primary leading-[22px]">
                Visitor’s Name
              </h2>
              <p className="text-xs font-nornal leading-[22px]">
                Nzekwe Christian
              </p>
            </div>

            <div className="my-3">
              <h2 className="text-xs font-semibold text-vms-primary leading-[22px]">
                Email Address
              </h2>
              <p className="text-xs font-nornal leading-[22px]">
                emekanzekwe@gmail.com
              </p>
            </div>

            <div className="flex justify-start gap-16 items-center">
              <div className="my-3">
                <h2 className="text-xs text-vms-primary font-semibold leading-[22px]">
                  Appointment Date
                </h2>
                <p className="text-xs font-nornal leading-[22px]">
                  DD - MM - YYYY
                </p>
              </div>

              <div className="my-3">
                <h2 className="text-xs text-vms-primary font-semibold leading-[22px]">
                  Appointment Time
                </h2>
                <p className="text-xs font-nornal leading-[22px]">HH:MM AM</p>
              </div>
            </div>

            <div className="my-3">
              <h2 className="text-xs text-vms-primary font-semibold leading-[22px]">
                Purpose of Meeting
              </h2>
              <p className="text-xs font-nornal leading-[22px] pb-12 border-b border-[#DADBF2]">
                This is a placeholder text for the “Purpose of Meeting”. It does
                not have to be long, just a simple reason why you want to meet
                the employee. A Maximum of 3 lines would do.
              </p>

              <p className="mt-8 font-semibold text-vms-primary">Visitor’s Information</p>
              <div className="my-3">
                <h2 className="text-xs text-vms-primary font-semibold leading-[22px]">
                  Employee Name
                </h2>
                <p className="text-xs font-nornal leading-[22px]">
                  Nzekwe Gabriel
                </p>
              </div>

              <div className="my-3">
                <h2 className="text-xs text-vms-primary font-semibold leading-[22px]">
                  Email Address
                </h2>
                <p className="text-xs font-nornal leading-[22px]">
                  emekanzekwe@gmail.com{" "}
                </p>
              </div>
            </div>
            <button className="py-2 mx-auto w-40 rounded-lg border border-vms-primary bg-white flex justify-center items-center text-vms-primary hover:scale-105 hover:bg-vms-primary transition-all hover:text-white" onClick={()=>setShowModal(false)}>Close</button>
          </div>
        </Backdrop>
      )}
    </div>
  );
}
