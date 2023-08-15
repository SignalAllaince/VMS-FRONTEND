import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function BarChartBox() {
  const data = [
    {
      name: "8AM",
      visitors: 90,
    },
    {
      name: "9AM",
      visitors: 14,
    },
    {
      name: "10AM",
      visitors: 130,
    },
    {
      name: "11AM",
      visitors: 200,
    },
    {
      name: "12AM",
      visitors: 160,
    },
    {
      name: "1PM",
      visitors: 60,
    },
    {
      name: "2PM",
      visitors: 80,
    },
    {
      name: "3PM",
      visitors: 120,
    },
    {
      name: "4PM",
      visitors: 140,
    },
  ];

  return (
    <div className="w-[50%] h-[400px] p-6 bg-white rounded-2xl">
      <h2 className="leading-8 text-xl font-bold">Popular Visiting Times</h2>
      <h1 className="text-5xl text-vms-darkest font-semibold">11 AM</h1>

      <ResponsiveContainer width="100%" height="100%" className="mt-9">
        <BarChart
          width={700}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid horizontal={true} vertical={false} />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="visitors" className="rounded-[2px]" fill="#141533" />
          {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
