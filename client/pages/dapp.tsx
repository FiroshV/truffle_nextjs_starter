import Link from "next/link";
import { useState } from "react";
import Web3Container from "../lib/Web3Container";

const Dapp = (props: { accounts: any; contract: any; web3: any }) => {
  const [balance, setBalance] = useState(0);
  const [ethBalance, setEthBalance] = useState(0);

  const storeValue = async () => {
    console.log("Storing value...");
    const { accounts, contract } = props;
    await contract.methods.set(5).send({ from: accounts[0] }).then(() => {console.log("Value stored!")});
    alert("Stored 5 into account");
    setBalance(5);
    console.log("Stored 5 into account");
  };


  const getValue = async () => {
    const { accounts, contract } = props;
    const response = await contract.methods.get().call({ from: accounts[0] });
    setBalance(response);
  };

  const getEthBalance = async () => {
    const { web3, accounts } = props;
    const balanceInWei = await web3.eth.getBalance(accounts[0]);
    setEthBalance(balanceInWei / 1e18);
  };

  return (
    <div>
      <h1>My Dapp</h1>

      <button onClick={storeValue}>Store 5 into account balance</button>
      <button onClick={getValue}>Get account balance</button>
      <button onClick={getEthBalance}>Get ether balance</button>
      <div>Account Balance: {balance}</div>
      <div>Ether Balance: {ethBalance}</div>
      <div>
        <Link href="/accounts">
          <a>My Accounts</a>
        </Link>
      </div>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
    </div>
  );
};

export default () => (
  <Web3Container
    renderLoading={() => <div>Loading Dapp Page...</div>}
    render={({
      web3,
      accounts,
      contract,
    }: {
      web3: any;
      accounts: any;
      contract: any;
    }) => <Dapp accounts={accounts} contract={contract} web3={web3} />}
  />
);
