import Web3 from "web3";
const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");

export const checkMetamask = () => {
  if (typeof window.ethereum !== "undefined" && window.ethereum.isMetaMask) {
    return true;
  } else {
    return false;
  }
};

export const checkMetamaskLogin = async () => {
  let accountData = await getUserAccount();
  console.log("accountData:", accountData);
  if (accountData === "undefined") {
    return false;
  } else {
    return true;
  }
};

export const getUserAccount = async () => {
  const res = await web3.eth.getAccounts().then((a) => a[0]);
  return res;
};

export const requestHandle = () => {
  window.ethereum
    .request({
      method: "wallet_requestPermissions",
      params: [{ eth_accounts: {} }],
    })
    .then((permissions) => {
      const accountsPermission = permissions.find(
        (permission) => permission.parentCapability === "eth_accounts"
      );
      if (accountsPermission) {
        console.log("eth_accounts permission successfully requested!");
        return true;
      }
    })
    .catch((error) => {
      if (error.code === 4001) {
        // EIP-1193 userRejectedRequest error
        console.log("Permissions needed to continue.");
        return false;
      } else {
        console.error(error);
        return false;
      }
    });
};
