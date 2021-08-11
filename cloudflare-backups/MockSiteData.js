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

  const waymoData = { waymo: Math.random() };
  const verilyData = { verily: Math.random() };

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
