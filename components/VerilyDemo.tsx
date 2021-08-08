import "react-dom";
import VerilyDemoCss from "./VerilyDemo/VerilyDemo.css";
import BaymaxScanResults from "./VerilyDemo/BaymaxScanResults";

export default function VerilyDemo() {
  return (
    <section id="verily-demo" className="p-0 verily-white-background">
      <p className="verily-white-text verily-blue-to-red">
        Electronic Medical Record dashboard
      </p>
      <section
        id="verily-demo-main-content"
        className="verily-white-background"
      >
        <BaymaxScanResults />
      </section>
      <small style={{ textAlign: "right", display: "block" }} className="p-0">
        (Note: this is a mock demo with simulated data.)
      </small>
      <style jsx>{VerilyDemoCss}</style>
    </section>
  );
}
