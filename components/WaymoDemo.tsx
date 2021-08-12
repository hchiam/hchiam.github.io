import "react-dom";
import { useEffect, useState } from "react";
import AVsOnline from "./WaymoDemo/AVsOnline";
import AVsOffline from "./WaymoDemo/AVsOffline";
import Passengers from "./WaymoDemo/Passengers";
import AVMap from "./WaymoDemo/AVMap";
import getMockData from "../helpers/getMockData";

export default function WaymoDemo(props) {
  const { showWaymoDemo } = props;

  const [mockWaymoData, setMockWaymoData] = useState(null);
  const [passengers, setPassengers] = useState(14986);
  const [milesOfXP, setMilesOfXP] = useState(20900913);
  const [incidencesResolved, setIncidencesResolved] = useState(47);

  async function fetchData() {
    const rawData = await getMockData("waymo");
    setMockWaymoData(rawData);
    setPassengers(rawData?.AutonomousVehicles?.Online?.AllocatedAVs);
    setMilesOfXP(rawData?.MilesOfXP);
    setIncidencesResolved(rawData?.IncidencesResolved);
    console.log(rawData);
  }

  let timer;
  useEffect(() => {
    clearInterval(timer);
    timer = setInterval(() => {
      if (showWaymoDemo) fetchData();
    }, 3000);

    return () => clearInterval(timer); // stop fetching data when hidden
  }, [showWaymoDemo]);

  return (
    <section id="waymo-demo" className="p-0 waymo-white-background">
      <h2 className="waymo-white-text waymo-blue-to-green my-0 text-center text-center">
        AV fleet infrastructure panel
      </h2>
      <section id="waymo-demo-main-content" className="waymo-white-background">
        <h2 className="waymo-blue-text waymo-white-background mb-0 px-0">
          Autonomous Vehicles: <span className="animated-text py-0">20600</span>
        </h2>
        <div className="mb-1 waymo-demo-group">
          <AVsOnline data={mockWaymoData} />
          <AVsOffline data={mockWaymoData} />
        </div>
        <div className="mb-1 waymo-demo-group">
          <div>
            <h2 className="waymo-blue-text waymo-white-background mb-0 px-0">
              Passengers:{" "}
              <span className="animated-text py-0">{passengers}</span>
            </h2>
            <div className="d-flex wrap">
              <Passengers data={mockWaymoData} />
            </div>
          </div>
          <div className="mb-1 d-flex wrap">
            <AVMap requestsPlusAVs={mockWaymoData?.RequestsPlusAVs} />
          </div>
        </div>
        <h2 className="waymo-blue-text waymo-white-background mb-0 px-0">
          Miles of XP: <span className="animated-text py-0">{milesOfXP}</span>
        </h2>
        <h2 className="waymo-blue-text waymo-white-background mb-0 px-0">
          Incidences resolved:{" "}
          <span className="animated-text py-0">{incidencesResolved}</span>
        </h2>
      </section>
      <small style={{ textAlign: "right", display: "block" }} className="p-0">
        (Note: this is a mock demo with simulated data.)
      </small>
    </section>
  );
}
