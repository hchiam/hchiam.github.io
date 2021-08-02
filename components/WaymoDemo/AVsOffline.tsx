import "react-dom";
import { PieChartCSS } from "../PieChartCSS";

export default function AVsOffline() {
  return (
    <div>
      <h3 className="waymo-dark-navy-text waymo-white-background my-0 p-0">
        Offline: 11/20600
      </h3>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
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
        <div style={{ margin: "0 1rem" }}>
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
    </div>
  );
}
