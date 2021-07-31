import "react-dom";
import { Chart } from "../components/Chart";

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
          <Chart
            id="avs-online"
            type="pie"
            title={"Online: 20589"}
            chartData={[
              { name: "Allocated", number: 14986 },
              { name: "Charging", number: 4323 },
              { name: "Available", number: 1280 },
            ]}
            size={{ width: 400, height: 300 }}
          />
          <Chart
            id="avs-offline"
            type="pie"
            title={"Offline: 11"}
            chartData={[
              { name: "Repairing", number: 10 },
              { name: "Unaccounted", number: 1 },
            ]}
            size={{ width: 400, height: 300 }}
          />
        </div>
        <div>
          <p>Passengers: 14,986</p>
          <div>
            <p className="p-0">
              <Chart
                id="passengers"
                type="bar"
                // title={"Passengers: 14986"}
                chartData={[
                  { name: "Hailing (blue circle)", number: 112 },
                  { name: "Requesting assistance (red octagon)", number: 2 },
                ]}
                size={{ width: 500, height: 300 }}
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

      <svg width="0" height="0">
        <defs>
          <pattern
            id="spots"
            width="5"
            height="5"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="5" height="5" fill="#3182bd"></rect>
            <circle cx="1" cy="1" r="1" fill="#8db3cf"></circle>
          </pattern>
          <pattern
            id="lines"
            width="5"
            height="5"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="5" height="5" fill="#9ecae1"></rect>
            <line
              x1="5"
              y1="0"
              x2="0"
              y2="0"
              stroke="#fff"
              stroke-width="1"
            ></line>
          </pattern>
        </defs>
      </svg>
    </section>
  );
}
