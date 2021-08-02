import "react-dom";
import { PieChartCSS } from "../PieChartCSS";

export default function AVsOnline() {
  return (
    <div>
      <h3 className="waymo-dark-navy-text waymo-white-background my-0 p-0">
        Online: 20589/20600
      </h3>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <PieChartCSS
          id="avs-online"
          title={"Online: 20589"}
          pieChartData={[
            {
              color: "var(--waymo-blue)",
              text: "⦿",
              number: 14986,
              textStartAdjust: "1em",
            },
            {
              color: "var(--verily-red)",
              text: "◼",
              number: 4323,
              textStartAdjust: "2em",
            },
            {
              color: "var(--waymo-green)",
              text: "▲",
              number: 1280,
              textStartAdjust: "2em",
            },
          ]}
        />
        <div style={{ margin: "0 1rem" }}>
          <p
            className={"circle-before-chart-label"}
            style={{ color: "white", background: "var(--waymo-blue)" }}
          >
            &nbsp;Allocated: 14986
          </p>
          <p
            className={"square-before-chart-label"}
            style={{ color: "white", background: "var(--verily-red)" }}
          >
            {" "}
            &nbsp;Charging: 4323
          </p>
          <p
            className={"triangle-before-chart-label"}
            style={{ color: "white", background: "var(--waymo-green)" }}
          >
            &nbsp;
            <span
              style={{
                color: "black",
                background: "var(--waymo-green)",
                paddingLeft: 0,
              }}
            >
              Available: 1280
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
