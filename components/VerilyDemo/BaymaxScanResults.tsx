import "react-dom";
import BaymaxScanResultsCss from "./BaymaxScanResults.css";

export default function BaymaxScanResults(props) {
  const { data } = props;

  return (
    <div className="baymax-scan-results">
      {/* google image search for "baymax scanner screen" */}

      <div className="section-1">
        <fieldset id="nbp" className="verily-white-background m-1">
          <legend className="verily-blue-background">NBP</legend>
          <small className="verily-purple-text verily-white-background p-0">
            {data?.NBP?.mmHg || 19.55} mmHg
          </small>
          <p>
            {data?.NBP?.sys || 113}/
            <small className="verily-purple-text verily-white-background p-0">
              {data?.NBP?.dia || 90}
            </small>{" "}
            {data?.NBP?.pulse || 80}
          </p>
        </fieldset>

        <fieldset id="ecg" className="verily-white-background m-1">
          <legend className="verily-blue-background">ECG</legend>
          <small
            className="verily-purple-text verily-white-background p-0"
            style={{ display: "block" }}
          >
            {data?.ECG?.value || 68}
          </small>
          <ul className="verily-white-background p-0">
            <li className="verily-purple-text verily-white-background p-0">
              PACE {data?.ECG?.PACE || 0.18}
            </li>
            <li className="verily-purple-text verily-white-background p-0">
              ST1 {data?.ECG?.ST1 || 0.52}
            </li>
            <li className="verily-purple-text verily-white-background p-0">
              ST2 {data?.ECG?.ST2 || 0.57}
            </li>
            <li className="verily-purple-text verily-white-background p-0">
              PVCs {data?.ECG?.PVCs || 0.55}
            </li>
          </ul>
        </fieldset>
      </div>

      <div className="section-2">
        <fieldset id="rr" className="verily-white-background m-1">
          <legend className="verily-blue-background">RR</legend>
          <small className="verily-purple-text verily-white-background p-0">
            {data?.RR || 21}
          </small>
        </fieldset>

        <fieldset id="spo2" className="verily-white-background m-1">
          <legend className="verily-blue-background">SPO2</legend>
          <small className="verily-purple-text verily-white-background p-0">
            {data?.SPO2 || 97}
          </small>
        </fieldset>

        <fieldset id="temp" className="verily-white-background m-1">
          <legend className="verily-blue-background">TEMP</legend>
          <small className="verily-purple-text verily-white-background p-0">
            {data?.TEMP || 98}
          </small>
        </fieldset>
      </div>

      <div className="section-3">
        <fieldset id="gnrh" className="verily-white-background m-1">
          <legend className="verily-gray-background">GnRH</legend>
          <small className="verily-purple-text verily-white-background p-0">
            {data?.GnRH || 68}
          </small>
        </fieldset>

        <fieldset id="lh" className="verily-white-background m-1">
          <legend className="verily-gray-background">LH</legend>
          <small className="verily-purple-text verily-white-background p-0">
            {data?.LH || 63}
          </small>
        </fieldset>

        <fieldset id="fsh" className="verily-white-background m-1">
          <legend className="verily-gray-background">FSH</legend>
          <small className="verily-purple-text verily-white-background p-0">
            {data?.FSH || 58}
          </small>
        </fieldset>

        <fieldset id="t" className="verily-white-background m-1">
          <legend className="verily-gray-background">T</legend>
          <small className="verily-purple-text verily-white-background p-0">
            {data?.T || 167}
          </small>
        </fieldset>

        <fieldset id="e2" className="verily-white-background m-1">
          <legend className="verily-gray-background">E2</legend>
          <small className="verily-purple-text verily-white-background p-0">
            {data?.E2 || 43}
          </small>
        </fieldset>

        <fieldset id="f" className="verily-white-background m-1">
          <legend className="verily-gray-background">F</legend>
          <small className="verily-purple-text verily-white-background p-0">
            {data?.F || 10}
          </small>
        </fieldset>
      </div>
      {/* TODO: a simple S line graph (grid with lowering S curve) */}
      <style jsx>{BaymaxScanResultsCss}</style>
    </div>
  );
}
