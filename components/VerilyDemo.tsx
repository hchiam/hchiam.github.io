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
        <button className="tab-1">Baymax Scan Results</button>
        <button className="tab-2">Patient Billing</button>
        <button className="tab-3">Pathology</button>
        <button className="tab-4">Radiology</button>
        <button className="tab-5">Admission</button>
        <button className="tab-6">Laboratory</button>
        <button className="tab-7">Scheduling</button>
        <button className="tab-8">Discharge and Transfer</button>
        <button className="tab-9">ICU and ER</button>
        <button className="tab-10">Pharmacology</button>
        <button className="tab-11">MPI</button>

        <div
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <section className="tab-content-1">
            <BaymaxScanResults />
          </section>
          <section className="tab-content-2">
            <p className="white-text verily-blue-background m-0">N/A</p>
          </section>
          <section className="tab-content-3">
            <p className="white-text verily-pink-background m-0">N/A</p>
          </section>
          <section className="tab-content-4">
            <p className="white-text verily-purple-background m-0">N/A</p>
          </section>
          <section className="tab-content-5">
            <p className="white-text verily-red-background m-0">N/A</p>
          </section>
          <section className="tab-content-6">
            <p className="white-text verily-gray-background m-0">N/A</p>
          </section>
          <section className="tab-content-7">
            <p className="white-text verily-blue-background m-0">N/A</p>
          </section>
          <section className="tab-content-8">
            <p className="white-text verily-pink-background m-0">N/A</p>
          </section>
          <section className="tab-content-9">
            <p className="white-text verily-purple-background m-0">N/A</p>
          </section>
          <section className="tab-content-10">
            <p className="white-text verily-red-background m-0">N/A</p>
          </section>
          <section className="tab-content-11">
            <p className="white-text verily-gray-background m-0">N/A</p>
          </section>
        </div>
      </section>
      <small style={{ textAlign: "right", display: "block" }} className="p-0">
        (Note: this is a mock demo with simulated data.)
      </small>
      <style jsx>{VerilyDemoCss}</style>
    </section>
  );
}
