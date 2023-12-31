import VisitorStatus from "../../components/vistor_status/VisitorStatus";
import Metrics from "../../components/metrics";
import BarChartBox from "../../components/chart";
import FVA from "../../components/fva";
// import FVA from '../../components/fva/index'
export default function index() {
  return (
    <div className="w-[80%] p-4 mt-4 min-h-screen ml-[18%]">
      <VisitorStatus page="report" />
      <div className="mt-5">
        <Metrics />
      </div>

      <div className="w-full mt-12">
        <BarChartBox/>
        <FVA/>
      </div>
    </div>
  );
}
