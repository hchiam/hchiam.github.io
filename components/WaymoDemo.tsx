import "react-dom";
import { PieChartCSS } from "./PieChartCSS";

export default function WaymoDemo() {
  return (
    <section id="waymo-demo" className="p-0 waymo-white-background">
      <p className="waymo-white-text waymo-blue-background">
        AV fleet infrastructure panel
      </p>
      <section className="p-0 waymo-white-background">
        <div>
          <p>AVs: 20,600</p>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
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
          <div>
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
              style={{ background: "var(--waymo-green)" }}
            >
              &nbsp;Available: 1280
            </p>
          </div>
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
          <div>
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
        <div>
          <p>Passengers: 14,986</p>
          <div>
            <p className="p-0">
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
              <div>
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
            </p>
          </div>
        </div>
        <div>
          <p>Miles of XP: 20,900,913</p>
          <p>Incidences resolved: 47</p>
        </div>
        <div>
          <p>Requests + AVs map:</p>
          {/* - Phoenix, Arizona simple shape
              - 🔵 = hailing
              - 🛑 = requesting assistance
              - ⬜ = AV
                - Indicate nearest available (and time)
              - 🔋 = charging stations
              - ⚠️ = roadside assistance */}
        </div>
      </section>
    </section>
  );
}
