// Register the service worker
if ("serviceWorker" in navigator) {
  // Wait for the 'load' event to not block other work
  window.addEventListener("load", async () => {
    // Try to register the service worker.
    try {
      await fetch("/offline.html").catch(() => {});

      // Capture the registration for later use, if needed
      let registration;

      const swPath = "/service-worker.js";

      // import.meta.env.DEV is a special environment variable injected by Vite to let us know we're in development mode. Here, we can use the JS Module form of our service worker because we can control our browsers in dev.
      if (import.meta.env.DEV) {
        registration = await navigator.serviceWorker.register(swPath, {
          type: "module",
        });
        console.log("Service worker registered! 😎", registration);
      } else {
        // In production, we use the normal service worker registration
        registration = await navigator.serviceWorker.register(swPath);
      }
    } catch (err) {
      if (import.meta.env.DEV) {
        console.log("😥 Service worker registration failed: ", err);
      }
    }
  });
}
