import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Note that Web3 is not loaded for this page.</p>
      <div>
        <Link href="/dapp">
          <a>My Dapp</a>
        </Link>
      </div>
      <div>
        <Link href="/accounts">
          <a>My Accounts</a>
        </Link>
      </div>
    </div>
  );
};

export default Home;
