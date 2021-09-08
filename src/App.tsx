import React, { useEffect, useState } from "react";
import "./App.css";
import Sparkline from "./components/Sparkline";
import Metrics from "./components/Metrics";
import ToggleAssets from "./components/ToggleAssets";
import Pagination from "./components/Pagination";

export interface IMETRIC {
  name: string;
  symbol: string;
  market_data: {
    price_usd: number;
  };
  marketcap: {
    current_marketcap_usd: number;
  };
  supply: {
    circulating: number;
  };
  all_time_high: {
    price: number;
  };
}

function App() {
  const [sparklineD, setSparklineD] = useState<number[][]>([]);
  const [metrics, setMetrics] = useState<IMETRIC>({
    name: "",
    symbol: "",
    market_data: { price_usd: 0 },
    marketcap: { current_marketcap_usd: 0 },
    supply: { circulating: 0 },
    all_time_high: { price: 0 },
  });
  const [asset, setAsset] = useState("ETH");
  const [buttons, setButtons] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [buttonsPerPage] = useState(5);
  const [timeLabels, setTimeLabels] = useState<string[]>([]);

  useEffect(() => {
    fetch(
      `https://data.messari.io/api/v1/assets/${asset}/metrics/price/time-series?start=2021-01-01&end=2021-02-01&interval=1d`
    )
      .then((res) => res.json())
      .then((res) => {
        const timeValues: string[] = [];
        res.data.values.map((time: any) => {
          let unixTime = time[0];
          let dateObj = new Date(unixTime);
          timeValues.push(
            dateObj.toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })
          );
          setTimeLabels(timeValues);
        });
        setSparklineD(res.data.values);
      });
    fetch(`https://data.messari.io/api/v1/assets/${asset}/metrics`)
      .then((res) => res.json())
      .then((res) => {
        setMetrics(res.data);
      });
    fetch("https://data.messari.io/api/v1/assets")
      .then((res) => res.json())
      .then((res) => {
        setButtons(res.data);
      });
  }, [asset]);

  return (
    <div className="App">
      <h1>Asset Overview Page 📈</h1>
      <Sparkline
        sparklineD={sparklineD}
        timeLabels={timeLabels}
        asset={asset}
      />
      <Metrics metrics={metrics} />
      <ToggleAssets
        buttonsPerPage={buttonsPerPage}
        currentPage={currentPage}
        buttons={buttons}
        setAsset={setAsset}
      />
      <Pagination
        buttons={buttons}
        buttonsPerPage={buttonsPerPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default App;
