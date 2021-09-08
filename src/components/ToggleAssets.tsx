import React, { MouseEvent } from "react";
import "../App.css";

interface ITOGGLEASSETPROPS {
  buttonsPerPage: number;
  currentPage: number;
  buttons: string[];
  setAsset: (asset: string) => void;
}

const ToggleAssets = (props: ITOGGLEASSETPROPS) => {
  const { buttonsPerPage, currentPage, buttons, setAsset } = props;

  const indexOfLastButton = currentPage * buttonsPerPage;
  const indexOfFirstButton = indexOfLastButton - buttonsPerPage;
  const currentButtons = buttons.slice(indexOfFirstButton, indexOfLastButton);

  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    setAsset(event.currentTarget.value);
  }
  return (
    <div className="assetsContainer">
      <p className="toggleAssets">Toggle different assets 👇🏽</p>
      <small>Total of 20 assets and 5 assets per page</small>

      <div className="buttonContainer">
        {currentButtons.map((x: any) => {
          return (
            <button
              className="btn"
              type="button"
              value={x.symbol}
              onClick={handleClick}
            >
              {x.symbol}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ToggleAssets;
