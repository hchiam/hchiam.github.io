import "react-dom";
import { useState } from "react";
import { PieChartCSS } from "../PieChartCSS";

export default function AVsOffline(props) {
  const { data } = props;
  const Offline =
    data?.AutonomousVehicles?.Offline?.Repairing +
    data?.AutonomousVehicles?.Offline?.Unaccounted;
  const Repairing = data?.AutonomousVehicles?.Offline?.Repairing;
  const Unaccounted = data?.AutonomousVehicles?.Offline?.Unaccounted;

  const [highlightSlice1, setHighlightSlice1] = useState(false);
  const [highlightSlice2, setHighlightSlice2] = useState(false);

  return (
    <div>
      <h3 className="waymo-dark-navy-text waymo-white-background my-0 p-0">
        Offline:{" "}
        <span className="animated-text waymo-dark-navy-text waymo-white-background px-0">
          {Offline || 11}
        </span>
        /20600
      </h3>
      <div className="d-flex wrap justify-center">
        <PieChartCSS
          id="avs-offline"
          title={`Offline: ${Offline || 11}`}
          pieChartData={[
            {
              color: "var(--waymo-blue)",
              text: "◼",
              ariaLabel: "◼ Repairing: " + (Repairing || 10),
              number: Repairing || 10,
              textStartAdjust: "1em",
              highlightedSlice: highlightSlice1,
            },
            {
              color: "var(--verily-red)",
              text: "▲",
              ariaLabel: "▲ Unaccounted: " + (Unaccounted || 1),
              number: Unaccounted || 1,
              textStartAdjust: "2em",
              highlightedSlice: highlightSlice2,
            },
          ]}
        />
        <div style={{ margin: "0 1rem" }}>
          <p
            className={
              "square-before-chart-label white-text waymo-blue-background"
            }
            tabIndex={0}
            onFocus={() => {
              setHighlightSlice1(true);
            }}
            onBlur={() => {
              setHighlightSlice1(false);
            }}
            onMouseOver={() => {
              setHighlightSlice1(true);
            }}
            onMouseLeave={() => {
              setHighlightSlice1(false);
            }}
          >
            &nbsp;Repairing: {Repairing || 10}
          </p>
          <p
            className={
              "triangle-before-chart-label white-text verily-red-background"
            }
            tabIndex={0}
            onFocus={() => {
              setHighlightSlice2(true);
            }}
            onBlur={() => {
              setHighlightSlice2(false);
            }}
            onMouseOver={() => {
              setHighlightSlice2(true);
            }}
            onMouseLeave={() => {
              setHighlightSlice2(false);
            }}
          >
            &nbsp;Unaccounted: {Unaccounted || 1}
          </p>
        </div>
      </div>
    </div>
  );
}
