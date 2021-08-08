import "react-dom";
import VerilyDemoCss from "./VerilyDemo/VerilyDemo.css";

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
        {/* google image search for "baymax scanner screen" */}

        <div className="section-1">
          <fieldset id="nbp" className="verily-white-background m-1">
            <legend className="verily-blue-background">NBP</legend>
            <small className="verily-purple-text verily-white-background p-0">
              19.55 mmHg
            </small>
            <p>
              113/
              <small className="verily-purple-text verily-white-background p-0">
                90
              </small>{" "}
              80
            </p>
          </fieldset>

          <fieldset id="ecg" className="verily-white-background m-1">
            <legend className="verily-blue-background">ECG</legend>
            <small
              className="verily-purple-text verily-white-background p-0"
              style={{ display: "block" }}
            >
              68
            </small>
            <ul className="verily-white-background p-0">
              <li className="verily-purple-text verily-white-background p-0">
                PACE .18
              </li>
              <li className="verily-purple-text verily-white-background p-0">
                ST1 .52
              </li>
              <li className="verily-purple-text verily-white-background p-0">
                ST2 .57
              </li>
              <li className="verily-purple-text verily-white-background p-0">
                PVCs .55
              </li>
            </ul>
          </fieldset>
        </div>

        <div className="section-2">
          <fieldset id="rr" className="verily-white-background m-1">
            <legend className="verily-blue-background">RR</legend>
            <small className="verily-purple-text verily-white-background p-0">
              21
            </small>
          </fieldset>

          <fieldset id="spo2" className="verily-white-background m-1">
            <legend className="verily-blue-background">SPO2</legend>
            <small className="verily-purple-text verily-white-background p-0">
              97
            </small>
          </fieldset>

          <fieldset id="temp" className="verily-white-background m-1">
            <legend className="verily-blue-background">TEMP</legend>
            <small className="verily-purple-text verily-white-background p-0">
              98
            </small>
          </fieldset>
        </div>

        <div className="section-3">
          <fieldset id="gnrh" className="verily-white-background m-1">
            <legend className="verily-gray-background">GnRH</legend>
            <small className="verily-purple-text verily-white-background p-0">
              68
            </small>
          </fieldset>

          <fieldset id="lh" className="verily-white-background m-1">
            <legend className="verily-gray-background">LH</legend>
            <small className="verily-purple-text verily-white-background p-0">
              63
            </small>
          </fieldset>

          <fieldset id="fsh" className="verily-white-background m-1">
            <legend className="verily-gray-background">FSH</legend>
            <small className="verily-purple-text verily-white-background p-0">
              58
            </small>
          </fieldset>

          <fieldset id="t" className="verily-white-background m-1">
            <legend className="verily-gray-background">T</legend>
            <small className="verily-purple-text verily-white-background p-0">
              167
            </small>
          </fieldset>

          <fieldset id="e2" className="verily-white-background m-1">
            <legend className="verily-gray-background">E2</legend>
            <small className="verily-purple-text verily-white-background p-0">
              43
            </small>
          </fieldset>

          <fieldset id="f" className="verily-white-background m-1">
            <legend className="verily-gray-background">F</legend>
            <small className="verily-purple-text verily-white-background p-0">
              10
            </small>
          </fieldset>
        </div>
        {/* TODO: a simple S line graph (grid with lowering S curve) */}
      </section>
      <small style={{ textAlign: "right", display: "block" }} className="p-0">
        (Note: this is a mock demo with simulated data.)
      </small>
      <style jsx>{VerilyDemoCss}</style>
    </section>
  );
}
