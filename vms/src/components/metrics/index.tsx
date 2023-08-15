import { BiUpArrowAlt } from "react-icons/bi"

export default function Metrics() {
  return (
    <div className="grid grid-cols-4 gap-3">
      <div className="col-span-2 p-6 bg-vms-darkest rounded-2xl">
        <p className="text-sm font-semibold leading-[22px] text-white">
          {" "}
          Total Visitors
        </p>
        <div className="flex justify-between items-center">
        <h2 className="text-5xl font-semibold text-white">6,794</h2>
        <div className="py-1 px-[10px] rounded-lg mt-4 flex justify-center gap-3 items-center text-white bg-[#505173]">
            <BiUpArrowAlt/>
            <p>20%</p>
        </div>
        </div>
      </div>
      <div className="col-span-1 p-6 bg-white rounded-2xl ">
        <p className="text-sm font-semibold leading-[22px] text-vms-darkest">
          {" "}
          Peak Visiting Hours
        </p>
        <h2 className="text-5xl font-semibold text-vms-darkest">36,073</h2>
      </div>
      <div className="col-span-1 rounded-2xl bg-white p-6">
        <p className="text-sm font-semibold leading-[22px] text-vms-darkest">
          {" "}
          Average Visiting Duration
        </p>
        <h2 className="text-5xl font-semibold text-vms-darkest">50 <span className="text-xs">(Mins)</span></h2>
      </div>
    </div>
  );
}
