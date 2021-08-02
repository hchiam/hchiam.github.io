import "react-dom";
import AVsOnline from "./WaymoDemo/AVsOnline";
import AVsOffline from "./WaymoDemo/AVsOffline";
import Passengers from "./WaymoDemo/Passengers";
import AVMap from "./WaymoDemo/AVMap";

export default function WaymoDemo() {
  return (
    <section id="waymo-demo" className="p-0 waymo-white-background">
      <p className="waymo-white-text waymo-blue-background">
        AV fleet infrastructure panel
      </p>
      <section className="p-0 waymo-white-background">
        <h2 className="waymo-blue-text waymo-white-background">AVs: 20,600</h2>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <AVsOnline />
          <AVsOffline />
        </div>
        <h2 className="waymo-blue-text waymo-white-background">
          Passengers: 14,986
        </h2>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <Passengers />
        </div>
        <h2 className="waymo-blue-text waymo-white-background">
          Miles of XP: 20,900,913
        </h2>
        <h2 className="waymo-blue-text waymo-white-background">
          Incidences resolved: 47
        </h2>
        <h2 className="waymo-blue-text waymo-white-background">
          Requests + AVs map:
        </h2>
        <AVMap />
      </section>
    </section>
  );
}
