// https://codepen.io/hchiam/pen/qBmKbWq

import chartCssStyle from "./PieChartCSS.css";

export interface PieChartProps {
  pieChartData: PieChartData[];
}

export interface PieChartData {
  name: string;
  number: number;
  start?: number;
  end?: number;
  color: string;
  text?: string;
  textLeft?: string;
  textTop?: string;
}

export interface Style {
  "--start": string; // need to append 'deg' to the number
  "--end": string; // need to append 'deg' to the number
  "--color": string;
  "--text"?: string;
  "--text-left"?: string;
  "--text-top"?: string;
}

export const PieChartCSS = (props: PieChartProps) => {
  const { pieChartData } = props;

  let total = 0;
  const data = [];
  for (let i = 0; i < pieChartData.length; i++) {
    const slice = pieChartData[i];
    const d: PieChartData = {
      start: total,
      end: total + slice.number,
      ...slice,
    };
    total += slice.number;
    data.push(d);
  }

  return (
    <>
      <div className={"pie"} tabindex={0}>
        {data.map((slice) => {
          const startDeg = Math.round((slice.start / total) * 360);
          const endDeg = Math.round((slice.end / total) * 360);
          const style: Style = {
            "--start": `${startDeg}deg`,
            "--end": `${endDeg}deg`,
            "--color": slice.color,
          };
          if (endDeg - startDeg > 180) style["--over180"] = 1;
          if (slice.text) style["--text"] = slice.text;
          if (slice.textLeft) style["--text-left"] = slice.textLeft;
          if (slice.textTop) style["--text-top"] = slice.textTop;

          return (
            <div
              className={"slice"}
              style={style as React.CSSProperties}
              tabindex={0}
            ></div>
          );
        })}
        <div className={"slice"} tabindex={-1}></div>
      </div>
      <style jsx>{chartCssStyle}</style>
    </>
  );
};
