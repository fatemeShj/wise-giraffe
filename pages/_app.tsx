import React from "react";
import "../styles/styles.css";
import "../styles/global.css";

import CatchCoins from "../components/CatchCoins";
function MyApp() {
  return (
    <div className="flex justify-center items-center h-screen">
      <CatchCoins />
      {/* <h2 onClick={onCheckout}>checkout</h2> */}
    </div>
  );
}

export default MyApp;
