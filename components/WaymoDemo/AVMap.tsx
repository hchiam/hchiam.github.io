import "react-dom";
import { useState } from "react";
import AVMapCSS from "./AVMap.css";
import { simulatedMapItems } from "../../helpers/AVMapSimulatedItems";

export default function AVMap() {
  // just for fun:
  const [spreadOutMapIcons, setSpreadOutMapIcons] = useState(false);

  return (
    <div>
      <h2 className="waymo-blue-text waymo-white-background mb-0 px-0">
        Requests + AVs map: <span className="animated-text py-0">20714</span>
      </h2>
      <div className="av-map-container">
        <div
          className={`av-map ${spreadOutMapIcons && "spread-out-map-icons"}`}
          onClick={() => setSpreadOutMapIcons(!spreadOutMapIcons)}
          tabIndex={0}
          role="button"
        >
          {simulatedMapItems.map((item) => (
            <AVMapPoint
              p={item[0]}
              left={`${item[1]}%`}
              top={`${item[2]}%`}
              extraClasses={item[3]}
            />
          ))}
        </div>
        <div className="legend">
          <p className="my-0 py-0 waymo-dark-navy-text">
            🔵 <span className="waymo-blue-background py-0">Hailing</span>
          </p>
          <p className="my-0 py-0 waymo-dark-navy-text">
            🛑{" "}
            <span className="verily-red-background py-0">
              Requesting Assistance
            </span>
          </p>
          <p className="my-0 py-0 waymo-dark-navy-text">
            ⬜{" "}
            <span className="black-background waymo-white-text py-0">AV</span>
          </p>
          {/* BONUS: indicate nearest available (and time) */}
          <p className="my-0 py-0 waymo-dark-navy-text">
            🔋{" "}
            <span className="waymo-green-background black-text py-0">
              Charging Station
            </span>
          </p>
          <p className="my-0 py-0 waymo-dark-navy-text">
            ⚠️{" "}
            <span className="yellow-background black-text py-0">
              Roadside Assistance
            </span>
          </p>
        </div>
        <style jsx>{AVMapCSS}</style>
      </div>
    </div>
  );
}

function AVMapPoint(props) {
  return (
    <>
      <span
        className={props.p + " " + props.extraClasses}
        style={
          { "--left": props.left, "--top": props.top } as React.CSSProperties
        }
      ></span>
      <style jsx>{AVMapCSS}</style>
    </>
  );
}
