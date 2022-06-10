export default function isInDeveloperMode(): boolean {
  return (
    typeof location !== "undefined" &&
    (location?.hostname === "localhost" || location?.hostname === "127.0.0.1")
  );
}
