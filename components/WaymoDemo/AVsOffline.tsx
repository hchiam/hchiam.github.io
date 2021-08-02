import "react-dom";
import { PieChartCSS } from "../PieChartCSS";

export default function AVsOffline() {
  return (
    <div style={{ display: "flex", flexWrap: "nowrap" }}>
      <PieChartCSS
        id="avs-offline"
        title={"Offline: 11"}
        pieChartData={[
          {
            color: "var(--waymo-blue)",
            text: "◼",
            number: 10,
            textStartAdjust: "1em",
          },
          {
            color: "var(--verily-red)",
            text: "▲",
            number: 1,
            textStartAdjust: "2em",
          },
        ]}
      />
      <div style={{ marginRight: "1rem" }}>
        <p
          className={"square-before-chart-label"}
          style={{ color: "white", background: "var(--waymo-blue)" }}
        >
          &nbsp;Repairing: 10
        </p>
        <p
          className={"triangle-before-chart-label"}
          style={{ color: "white", background: "var(--verily-red)" }}
        >
          &nbsp;Unaccounted: 1
        </p>
      </div>
    </div>
  );
}
