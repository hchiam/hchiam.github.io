import "react-dom";
import { PieChartCSS } from "../PieChartCSS";

export default function Passengers() {
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
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
      <div style={{ margin: "0 1rem" }}>
        <p
          className={"circle-before-chart-label"}
          style={{ color: "white", background: "var(--waymo-blue)" }}
        >
          &nbsp;Hailing: 112
        </p>
        <p
          className={"triangle-before-chart-label"}
          style={{ color: "white", background: "var(--verily-red)" }}
        >
          &nbsp;Requesting assistance: 2
        </p>
      </div>
    </div>
  );
}
