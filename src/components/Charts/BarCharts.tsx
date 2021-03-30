import React, { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useAppSelector } from "../../Redux/hooks";

const BarCharts = () => {
  const items = useAppSelector((state) => state.values.items);
  const [myData, setMyData] = useState(items);
  const data = [
    {
      category: "Page A",

      value: 2400,
    },
    {
      category: "Page B",

      value: 2210,
    },
    {
      category: "Page B",

      value: 2210,
    },
    {
      category: "Page B",

      value: 2210,
    },
  ];
  useEffect(() => {
    var output = items.reduce(function (accumulator: any, cur: any) {
      var category = cur.category;
      let obj = accumulator.find(function (elem: any) {
        return elem.category == category;
      });
      console.log(cur, "CUR");
      console.log(obj, "OBJ");
      if (obj) obj = { ...obj, value: obj.value + cur.value };
      else accumulator.push(cur);
      return accumulator;
    }, []);
    console.log(output);
    //https://jsfiddle.net/mplungjan/Lr84keqy/
    return () => {};
  }, [items]);
  return (
    <div style={{ width: "600px", height: "600px", margin: "0 auto" }}>
      {" "}
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={myData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarCharts;
