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
              { color: "#db0a5b", name: "Allocated", number: 14986 },
              { color: "#22a7f0", name: "Charging", number: 4323 },
              { color: "#2ecc71", name: "Available", number: 1280 },
            ]}
          />
          <PieChartCSS
            id="avs-offline"
            title={"Offline: 11"}
            pieChartData={[
              { color: "#22a7f0", name: "Repairing", number: 10 },
              { color: "#2ecc71", name: "Unaccounted", number: 1 },
            ]}
          />
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
                    color: "#db0a5b",
                    name: "Hailing (blue circle)",
                    number: 112,
                  },
                  {
                    color: "#22a7f0",
                    name: "Requesting assistance (red octagon)",
                    number: 2,
                  },
                ]}
              />
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
              - Blue circles = hailing
              - Red octagons = requesting assistance
              - White rectangles = AV
                - Indicate nearest available (and time)
              - Green square = charging stations
              - Yellow triangle = roadside assistance */}
        </div>
      </section>
    </section>
  );
}
