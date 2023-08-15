import { SACON } from "../../assets";
import { sideNavArr } from "../../utils";
import { RxDashboard } from "react-icons/rx";
import { FaPeopleGroup } from "react-icons/fa6";
import { TbReportAnalytics } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineMinusCircle } from "react-icons/ai";
export default function SideBar() {
  const location = useLocation()
  return (
    <div className="fixed left-0 p-4 top-0 h-screen w-[17%] border-r border-[#DADBF2] bg-white">
      <div className=" w-24 h-24 mb-10">
        <img src={SACON} className="w-full h-full object-contain" alt="" />
      </div>

      {sideNavArr.map((item, index) => (
        <Link to={item.link} className="">
        <div className={`${item.link === location.pathname ? "text-vms-primary font-semibold" : "text-vms-medium"} hover:text-vms-primary transition-all flex justify-start items-center gap-3 py-4`}>
          {index === 0 ? (
            <RxDashboard size={20} />
          ) : index === 1 ? (
            <FaPeopleGroup size={20} />
          ) : index === 2 ? (
            <TbReportAnalytics size={20} />
          ) : (
            <TbReportAnalytics size={20} />
          )}

          <p>{item.label}</p>
        </div>
        </Link>
      ))}

      <div className="flex justify-start gap-3 text-vms-medium mt-8 items-center">
        <AiOutlineMinusCircle/>
        <p>Logout</p>
      </div>
    </div>
  );
}
