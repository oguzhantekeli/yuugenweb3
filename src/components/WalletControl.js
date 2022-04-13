import React, { useEffect, useState } from "react";

const WalletControl = () => {
  const [isMetaMaskHere, setIsMetaMaskHere] = useState(false);
  useEffect(() => {
    if (window.ethereum) {
      setIsMetaMaskHere(true);
      console.log("metamask ok");
    }
  }, [window.ethereum]);
  return isMetaMaskHere ? <div>metamask here</div> : <div>no metamask</div>;
};

export default WalletControl;
