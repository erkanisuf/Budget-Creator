import React, { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  LabelList,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { width } from "../../Layout/Layout";
import { useAppSelector } from "../../Redux/hooks";

const BarCharts = () => {
  const items = useAppSelector((state) => state.values.items);
  const [myData, setMyData] = useState<any>(items);

  useEffect(() => {
    // This function combines the values of the dublicating categoris and sums the values:
    //Function info from here: https://stackoverflow.com/questions/24444738/sum-similar-keys-in-an-array-of-objects
    const copyar = [...items];
    const res = Array.from(
      copyar.reduce(
        (m: any, { category, value }) =>
          m.set(category, (m.get(category) || 0) + value),
        new Map()
      ),

      ([category, value]) => ({ category, value })
    );
    setMyData(res);

    return () => {};
  }, [items]);

  const renderCustomAxisTick = ({ x, y, payload }: any) => {
    return (
      <text
        x={x - 12}
        y={y + 15}
        width={24}
        height={24}
        fontSize="22px"
        viewBox="0 0 1024 1024"
        fill="#ffffff"
      >
        {payload.value}
      </text>
    );
  };
  // Label
  const renderCustomBarLabel = ({
    payload,
    x,
    y,
    width,
    height,
    value,
  }: any) => {
    const radius = 25;

    return (
      <g>
        <circle cx={x + width / 2} cy={y - radius} r={radius} fill="#8884d8" />
        <text
          x={x + width / 2}
          y={y - radius}
          fill="#fff"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {value}€
        </text>
      </g>
    );
  };

  const CustomTooltip = ({ payload, label, active }: any) => {
    if (active) {
      return (
        <div
          className="custom-tooltip"
          style={{ backgroundColor: "rgba(7, 7, 7, 0.8)", padding: "25px" }}
        >
          <p className="desc">
            Total value of {label} is {payload ? payload[0].value : ""}€.
          </p>
          <div className="desc">
            {items
              .filter((el) => el.category === label)
              .map((el, index) => {
                return (
                  <p style={{ fontSize: "12px" }} key={index}>
                    {el.name}: {el.value}€
                  </p>
                );
              })}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div
      style={{
        width: width > 1024 ? "60%" : "100%",
        height: "600px",
        borderTop: "1px solid #474b4f",
        position: "relative",
        margin: "0 auto",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Category Chart</h1>
      {!myData.length && (
        <p
          style={{
            width: "100%",
            position: "absolute",
            fontSize: "25px",
            top: "30%",
            left: "40%",
          }}
        >
          No expenses added
        </p>
      )}

      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={500}
          data={myData}
          margin={{
            top: 55,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="category" tick={renderCustomAxisTick} />
          <YAxis dataKey="value" />
          <Tooltip content={CustomTooltip} />
          <Legend
            width={100}
            wrapperStyle={{
              top: 40,
              left: 0,
              backgroundColor: "#f5f5f5",
              border: "1px solid #d5d5d5",
              borderRadius: 55,
              lineHeight: "40px",
            }}
          />
          <Bar dataKey="value" fill="#B084CC" label={renderCustomBarLabel} />
          <LabelList dataKey="category" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarCharts;
