import "react-dom";
import AVMapCSS from "./AVMap.css";

export default function AVMap() {
  return (
    <>
      <div className={"av-map"}>
        {/* - Phoenix, Arizona simple shape
              - 🔵 = hailing
              - 🛑 = requesting assistance
              - ⬜ = AV
                - Indicate nearest available (and time)
              - 🔋 = charging stations
              - ⚠️ = roadside assistance */}
      </div>
      <style jsx>{AVMapCSS}</style>
    </>
  );
}
