import "react-dom";
import { useState } from "react";
import { PieChartCSS } from "../PieChartCSS";

export default function AVsOnline(props) {
  const { data } = props;
  const Online =
    data?.AutonomousVehicles?.Online?.AllocatedAVs +
    data?.AutonomousVehicles?.Online?.ChargingAVs +
    data?.AutonomousVehicles?.Online?.AvailableAVs -
    data?.AutonomousVehicles?.Offline?.Repairing -
    data?.AutonomousVehicles?.Offline?.Unaccounted;
  const AllocatedAVs = data?.AutonomousVehicles?.Online?.AllocatedAVs;
  const ChargingAVs = data?.AutonomousVehicles?.Online?.ChargingAVs;
  const AvailableAVs = data?.AutonomousVehicles?.Online?.AvailableAVs;

  const [highlightSlice1, setHighlightSlice1] = useState(false);
  const [highlightSlice2, setHighlightSlice2] = useState(false);
  const [highlightSlice3, setHighlightSlice3] = useState(false);

  return (
    <div>
      <h3 className="waymo-dark-navy-text waymo-white-background my-0 p-0">
        Online:{" "}
        <span className="animated-text waymo-dark-navy-text waymo-white-background px-0">
          {Online || 20589}
        </span>
        /20600
      </h3>
      <div className="d-flex wrap justify-center">
        <PieChartCSS
          id="avs-online"
          title={`Online: ${Online || 20589}`}
          pieChartData={[
            {
              sliceId: "Allocated",
              color: "var(--waymo-blue)",
              text: "⦿",
              ariaLabel: "⦿ Allocated: " + (AllocatedAVs || 14986),
              number: AllocatedAVs || 14986,
              textStartAdjust: "1em",
              highlightedSlice: highlightSlice1,
            },
            {
              sliceId: "Charging",
              color: "var(--verily-red)",
              text: "◼",
              ariaLabel: "◼ Charging: " + (ChargingAVs || 4323),
              number: ChargingAVs || 4323,
              textStartAdjust: "2em",
              highlightedSlice: highlightSlice2,
            },
            {
              sliceId: "Available",
              color: "var(--waymo-green)",
              text: "▲",
              ariaLabel: "▲ Available: " + (AvailableAVs || 1280),
              number: AvailableAVs || 1280,
              textStartAdjust: "2em",
              highlightedSlice: highlightSlice3,
            },
          ]}
        />
        <div style={{ margin: "0 1rem" }}>
          <p
            className="circle-before-chart-label white-text waymo-blue-background"
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
            &nbsp;Allocated: {AllocatedAVs || 14986}
          </p>
          <p
            className="square-before-chart-label white-text verily-red-background"
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
            {" "}
            &nbsp;Charging: {ChargingAVs || 4323}
          </p>
          <p
            className="triangle-before-chart-label white-text waymo-green-background"
            tabIndex={0}
            onFocus={() => {
              setHighlightSlice3(true);
            }}
            onBlur={() => {
              setHighlightSlice3(false);
            }}
            onMouseOver={() => {
              setHighlightSlice3(true);
            }}
            onMouseLeave={() => {
              setHighlightSlice3(false);
            }}
          >
            &nbsp;
            <span
              className="black-text waymo-green-background"
              style={{
                paddingLeft: 0,
              }}
            >
              Available: {AvailableAVs || 1280}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
