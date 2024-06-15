import React, { useState } from "react";
import Image from "next/image";
import Giraffe from "../public/giraffe.png";
import { BiSolidCoinStack } from "react-icons/bi";
import Message from "./Message";
import { CiWallet } from "react-icons/ci";

const CatchCoins = () => {
  const [coinCount, setCoinCount] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  const increaseCoinCount = () => {
    setCoinCount((prevCount: any) => prevCount + 1);
    setClickCount((prevCount: any) => prevCount + 1);

    if ((clickCount + 1) % 3 === 0) {
      setShowMessage(true);
    } else {
      setShowMessage(false);
    }
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        {showMessage && <Message />}
        <h3 className="card-title">
          <BiSolidCoinStack />
          Coins: {coinCount}
        </h3>
      </div>
      <figure className="relative w-full h-64">
        <Image
          src={Giraffe}
          alt="Giraffe"
          onClick={increaseCoinCount}
          className="inline-block"
          fill
          style={{ objectFit: "contain" }}
        />
      </figure>
      <button
        className="btn btn-outline btn-success"
        // onClick={TonWalletButton}
      >
        <span className="text-2xl">
          <CiWallet />
        </span>
        Wallet
      </button>
    </div>
  );
};

export default CatchCoins;
