// https://mock-hchiam-site-data.hchiam.workers.dev/

const allowed = [
  "https://hchiam.com",
  "https://mock-hchiam-site-data.hchiam.workers.dev",
  "http://localhost:3000",
];

addEventListener("fetch", (event) => {
  event.respondWith(
    handleRequest(event.request).catch(
      (err) => new Response(err.stack, { status: 500 })
    )
  );
});

/**
 * Many more examples available at:
 *   https://developers.cloudflare.com/workers/examples
 * @param {Request} request
 * @returns {Promise<Response>}
 */
async function handleRequest(request) {
  const { pathname } = new URL(request.url);

  const headers = new Headers({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET",
    "Access-Control-Allow-Headers": "*",
    "Content-Type": "application/json",
  });

  const waymoData = getMockWaymoData();
  const verilyData = getMockVerilyData();

  if (!allowed.includes(request.headers.get("origin"))) {
    return new Response("Not allowed", {
      status: 403,
      headers: headers,
    });
  }

  if (pathname.startsWith("/waymo")) {
    return new Response(JSON.stringify(waymoData), {
      status: 200,
      headers,
    });
  }

  if (pathname.startsWith("/verily")) {
    return new Response(JSON.stringify(verilyData), {
      status: 200,
      headers,
    });
  }

  if (pathname === "/") {
    return new Response(JSON.stringify({ OK: true }), {
      status: 200,
      headers,
    });
  }

  // return fetch("https://welcome.developers.workers.dev");
}

function getRandomNumber(start, stop) {
  const output = Math.floor(Math.random() * stop + start);
  return output;
}

function getRandomNumberPlusMinus(number, plusOrMinus) {
  const posOrNeg = Math.round(Math.random()) ? 1 : -1;
  return number + getRandomNumber(0, plusOrMinus + 1) * posOrNeg;
}

function getMockWaymoData() {
  const Online = 20600;
  const AllocatedAVs = getRandomNumberPlusMinus(14986, 10);
  const ChargingAVs = getRandomNumberPlusMinus(4323, 10);
  const AvailableAVs = Online - AllocatedAVs - ChargingAVs;

  const Passengers = AllocatedAVs;
  const Hailing = getRandomNumberPlusMinus(112, 1);
  const RequestingAssistance = getRandomNumberPlusMinus(2, 1);
  const Serving = Passengers - Hailing - RequestingAssistance;
  return {
    AutonomousVehicles: {
      Online: {
        AllocatedAVs,
        ChargingAVs,
        AvailableAVs,
      },
      Offline: {
        Repairing: 10,
        Unaccounted: 1,
      },
    },
    Passengers: {
      Hailing,
      Serving,
      RequestingAssistance,
    },
    RequestsPlusAVs: 20714,
    MilesOfXP: 20900913,
    IncidencesResolved: 47,
  };
}

function getMockVerilyData() {
  return {
    NBP: {
      mmHg: getRandomNumberPlusMinus(1955, 3) / 100,
      sys: getRandomNumberPlusMinus(113, 1),
      dia: getRandomNumberPlusMinus(90, 1),
      pulse: getRandomNumberPlusMinus(80, 1),
    },
    ECG: {
      value: getRandomNumberPlusMinus(68, 2),
      PACE: getRandomNumberPlusMinus(18, 1) / 100,
      ST1: getRandomNumberPlusMinus(52, 1) / 100,
      ST2: getRandomNumberPlusMinus(57, 1) / 100,
      PVCs: getRandomNumberPlusMinus(55, 1) / 100,
    },
    RR: getRandomNumberPlusMinus(21, 1),
    SPO2: getRandomNumberPlusMinus(97, 1),
    TEMP: getRandomNumberPlusMinus(98, 1),
    GnRH: getRandomNumberPlusMinus(68, 1),
    LH: getRandomNumberPlusMinus(63, 1),
    FSH: getRandomNumberPlusMinus(58, 1),
    T: getRandomNumberPlusMinus(167, 1),
    E2: getRandomNumberPlusMinus(43, 1),
    F: getRandomNumberPlusMinus(10, 1),
  };
}
