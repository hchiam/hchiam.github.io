import { useEffect } from "react";
import c3 from "c3";

export interface ChartProps {
  id: string;
  type: string;
  title?: string;
  chartData: ChartData[];
  size?: { width?: number; height?: number };
}

export interface ChartData {
  name: string;
  number: number;
}

export const Chart = (props: ChartProps) => {
  const { id, type, title, chartData, size } = props;

  useEffect(() => {
    c3.generate({
      bindto: `#${id}`,
      title: { text: title },
      data: {
        columns: chartData.map((x) => [`${x.name}: ${x.number}`, x.number]),
        type: type,
      },
      legend: {
        position: "right",
      },
      size: size,
    });
  }, [chartData]);

  return <div id={id} />;
};
