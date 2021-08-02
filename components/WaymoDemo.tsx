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
      <section id="waymo-demo-main-content" className="waymo-white-background">
        <h2 className="waymo-blue-text waymo-white-background mb-0 px-0">
          Autonomous Vehicles: <span className="py-0">20600</span>
        </h2>
        <div className="mb-1 waymo-demo-group">
          <AVsOnline />
          <AVsOffline />
        </div>
        <div className="mb-1 waymo-demo-group">
          <div>
            <h2 className="waymo-blue-text waymo-white-background mb-0 px-0">
              Passengers: <span className="py-0">14986</span>
            </h2>
            <div className="d-flex wrap">
              <Passengers />
            </div>
          </div>
          <div className="mb-1 d-flex wrap">
            <AVMap />
          </div>
        </div>
        <h2 className="waymo-blue-text waymo-white-background mb-0 px-0">
          Miles of XP: <span className="py-0">20900913</span>
        </h2>
        <h2 className="waymo-blue-text waymo-white-background mb-0 px-0">
          Incidences resolved: <span className="py-0">47</span>
        </h2>
      </section>
      <small style={{ textAlign: "right", display: "block" }} className="p-0">
        (Note: this is a mock demo with simulated data.)
      </small>
    </section>
  );
}
