import React from "react";
import Wallet from "../wallet/Wallet";

const Login = () => {
  return (
    <div className="login_wrapper">
      <h1>Connect your wallet</h1>
      <p>
        If you don't have a <span>wallet</span> yet, you can select a provider
        and create one now
      </p>
      <div className="wallet">
        <Wallet />
      </div>
    </div>
  );
};

export default Login;
