import { fvaArr } from "../../utils";

export default function FVA() {
  return (
    <div className="w-[100%] mt-5 p-6 bg-white rounded-2xl">
      <h2 className="text-xl leading-6 font-bold">Frequently Visited Areas</h2>

      <table className="w-full mt-7">
        <thead>
          <tr>
            <th className="py-3 text-sm font-semibold leading-[22px]">Area</th>
            <th className="py-3 text-sm font-semibold leading-[22px]">Date Last Visited</th>
            <th className="py-3 text-sm font-semibold leading-[22px]">Number of visits</th>
          </tr>
        </thead>

        <tbody>
          {fvaArr.map((area, index) => (
            <tr key={index} className={`${index % 2 === 0 ? "bg-[#FAFAFF]" : "bg-white"}`}>
              <td className="text-center text-sm leading-[22px] font-medium text-vms-dark py-3">{area.area}</td>
              <td className="text-center text-sm leading-[22px] font-medium text-vms-dark py-3">{area.date}</td>
              <td className="text-center text-sm leading-[22px] font-medium text-vms-dark py-3">{area.number_of_visits}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
