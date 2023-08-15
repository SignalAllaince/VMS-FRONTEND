import { visitorArr } from "../../utils";

export default function Table() {
  return (
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
          {visitorArr.map((visitor, _) => (
            <tr
              key={_}
              className={`${_ % 2 === 0 ? "bg-[#FAFAFF]" : "bg-white"}`}
            >
              <td className="text-center text-sm leading-[22px] font-medium text-vms-dark py-3">
                {visitor.name}
              </td>
              <td className="text-center text-sm leading-[22px] font-medium text-vms-dark py-3">
                {visitor.date}
              </td>
              <td className="text-center text-sm leading-[22px] font-medium text-vms-dark py-3">
                {visitor.checkInTime}
              </td>
              <td className="text-center text-sm leading-[22px] font-medium text-vms-dark py-3">
                {visitor.checkOutTime}
              </td>
              <td className="flex justify-end items-center px-4 py-3">
                <button className="mt-1 px-4 py-2 border border-vms-dark rounded-lg text-sm leading-[22px] text-vms-dark font-medium hover:bg-vms-primary hover:text-white hover:scale-105 transition-all">View details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
