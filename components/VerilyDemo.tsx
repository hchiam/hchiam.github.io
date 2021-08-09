import "react-dom";
import { useRef, useEffect } from "react";
import VerilyDemoCss from "./VerilyDemo/VerilyDemo.css";
import BaymaxScanResults from "./VerilyDemo/BaymaxScanResults";

export default function VerilyDemo(props) {
  const { showVerilyDemo } = props;
  const defaultTabRef = useRef(null);

  useEffect(() => {
    if (showVerilyDemo) {
      defaultTabRef.current.focus();
    }
  }, [showVerilyDemo]);

  return (
    <section id="verily-demo" className="p-0 verily-white-background">
      <p className="verily-white-text verily-red-to-blue">
        Electronic Medical Record dashboard
      </p>
      <section
        id="verily-demo-main-content"
        className="verily-white-background"
      >
        <button ref={defaultTabRef} className="tab-1">
          Scan Results
        </button>
        <button className="tab-2">Admission</button>
        <button className="tab-3">Scheduling</button>
        <button className="tab-4">ICU and ER</button>
        <button className="tab-5">Laboratory</button>
        <button className="tab-6">Pharmacology</button>
        <button className="tab-7">MPI</button>
        <button className="tab-8">Radiology</button>
        <button className="tab-9">Pathology</button>
        <button className="tab-10">Discharge and Transfer</button>
        <button className="tab-11">Patient Billing</button>

        <div className="tab-content-container">
          <section className="tab-content-1">
            <BaymaxScanResults />
          </section>
          <section className="tab-content-2">
            <p className="white-text verily-blue-background m-0">
              Admission: N/A (this is just a mock demo)
            </p>
          </section>
          <section className="tab-content-3">
            <p className="white-text verily-pink-background m-0">
              Scheduling: N/A (this is just a mock demo)
            </p>
          </section>
          <section className="tab-content-4">
            <p className="white-text verily-purple-background m-0">
              ICU and ER: N/A (this is just a mock demo)
            </p>
          </section>
          <section className="tab-content-5">
            <p className="white-text verily-red-background m-0">
              Laboratory: N/A (this is just a mock demo)
            </p>
          </section>
          <section className="tab-content-6">
            <p className="white-text verily-gray-background m-0">
              Pharmacology: N/A (this is just a mock demo)
            </p>
          </section>
          <section className="tab-content-7">
            <p className="white-text verily-blue-background m-0">
              MPI: N/A (this is just a mock demo)
            </p>
          </section>
          <section className="tab-content-8">
            <p className="white-text verily-pink-background m-0">
              Radiology: N/A (this is just a mock demo)
            </p>
          </section>
          <section className="tab-content-9">
            <p className="white-text verily-purple-background m-0">
              Pathology: N/A (this is just a mock demo)
            </p>
          </section>
          <section className="tab-content-10">
            <p className="white-text verily-red-background m-0">
              Discharge and Transfer: N/A (this is just a mock demo)
            </p>
          </section>
          <section className="tab-content-11">
            <p className="white-text verily-gray-background m-0">
              Patient Billing: N/A (this is just a mock demo)
            </p>
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
