import React from "react";
import "../App.css";
import { IMETRIC } from "../App";

interface IMETRICPROPS {
  metrics: IMETRIC;
}

const Metrics = (props: IMETRICPROPS) => {
  const { metrics } = props;
  function numberWithCommas(num: string) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <div>
      <p className="assetMetrics">Asset Metrics 🧮</p>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Symbol</td>
            <td>Current Price</td>
            <td>Current Market Cap</td>
            <td>Circulating Supply</td>
            <td>All Time High</td>
          </tr>
          <tr>
            <td>{metrics.name}</td>
            <td>{metrics.symbol}</td>
            <td>
              ${numberWithCommas(metrics.market_data.price_usd.toFixed(2))}
            </td>
            <td>
              $
              {numberWithCommas(
                metrics.marketcap.current_marketcap_usd.toFixed(2)
              )}
            </td>
            <td>${numberWithCommas(metrics.supply.circulating.toFixed(2))}</td>
            <td>
              {metrics.all_time_high.price
                ? `$${numberWithCommas(metrics.all_time_high.price.toFixed(2))}`
                : "N/A"}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Metrics;
