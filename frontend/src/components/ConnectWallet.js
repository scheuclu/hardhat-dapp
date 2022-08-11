import React from "react";
import TokenLogo from '../images/lst_base.png';
import '../css/buttons.css';

import { NetworkErrorMessage } from "./NetworkErrorMessage";

export function ConnectWallet({ connectWallet, networkError, dismiss }) {
  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-12 text-center">
          {/* Metamask network should be set to Localhost:8545. */}
          {networkError && (
            <NetworkErrorMessage 
              message={networkError} 
              dismiss={dismiss} 
            />
          )}
        </div>
        <div className="col-6 p-4 text-center">
          <img src={TokenLogo} alt="logo" height="100"/>
          <hr></hr>
          <h3>Welcome to Lukas Token!</h3>
          <p>Please connect your web3 wallet. <a href="https://www.youtube.com/watch?v=ZIGUC9JAAw8">(HowTo)</a></p>
          <button
            className="connect_button"
            type="button"
            onClick={connectWallet}
          >
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
}
