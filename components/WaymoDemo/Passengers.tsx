import "react-dom";
import { useState } from "react";
import { PieChartCSS } from "../PieChartCSS";

export default function Passengers() {
  const [highlightSlice1, setHighlightSlice1] = useState(false);
  const [highlightSlice2, setHighlightSlice2] = useState(false);

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
            highlightedSlice: highlightSlice1,
          },
          {
            color: "var(--verily-red)",
            text: "▲",
            number: 2,
            textStartAdjust: "3em",
            highlightedSlice: highlightSlice2,
          },
        ]}
      />
      <div className="my-0 mx-1">
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
          &nbsp;Hailing: 112
        </p>
        <p
          className="triangle-before-chart-label white-text verily-red-background"
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
          &nbsp;Requesting assistance: 2
        </p>
      </div>
    </div>
  );
}
