import Metrics from "../../components/metrics";
import VisitorStatus from "../../components/vistor_status/VisitorStatus";

export default function Home() {
  return (
    <div className="w-[80%] p-4 mt-4 min-h-screen ml-[18%]">
      <Metrics/>
      <VisitorStatus/>
    </div>
  )
}
