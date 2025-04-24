import { useEffect } from "react";
import "./App.css";
import CryptoTable from "./components/CryptoTable";
import simulateLiveData from "./features/crypto/cryptoAPI";

function App() {

  useEffect(() => {
    simulateLiveData();
  }, []);
  
  return (
    <>
      <CryptoTable />
    </>
  );
}

export default App;
