import "react-dom";
import { PieChartCSS } from "../PieChartCSS";

export default function Passengers() {
  return (
    <div className="d-flex wrap justify-center">
      <PieChartCSS
        id="passengers"
        title={"Passengers: 14986"}
        pieChartData={[
          {
            color: "var(--waymo-blue)",
            text: "⦿",
            number: 112,
            textStartAdjust: "1em",
          },
          {
            color: "var(--verily-red)",
            text: "▲",
            number: 2,
            textStartAdjust: "3em",
          },
        ]}
      />
      <div className="my-0 mx-1">
        <p className="circle-before-chart-label white-text waymo-blue-background">
          &nbsp;Hailing: 112
        </p>
        <p className="triangle-before-chart-label white-text verily-red-background">
          &nbsp;Requesting assistance: 2
        </p>
      </div>
    </div>
  );
}
