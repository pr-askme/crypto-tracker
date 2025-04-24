import { useSelector } from "react-redux"

export default function CryptoTable() {

    const assets = useSelector(state=>state.crypto.assets);

  return (
    <div className="crypto-table-container">
      <h1>Real-Time Crypto Tracker</h1>
      <div className="table-scroll">
        <table className="crypto-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Coin</th>
            
              <th>Price</th>
              <th>1h %</th>
              <th>24h %</th>
              <th>7d %</th>
              <th>Market Cap</th>
              <th>Volume (24h)</th>
              <th>Circulating Supply</th>
              <th>Max Supply</th>
              <th>7D Chart</th>
            </tr>
          </thead>
          <tbody>
            {assets.map((asset) => (
              <tr key={asset.id}>
                <td>{asset.id}</td>
                <td className="coin-cell">
                  <img 
                    src={asset.logo} 
                    alt={asset.name} 
                    className="coin-logo"
                  />
                  {asset.name}
                </td>
                
                <td>${asset.price.toLocaleString()}</td>
                <td className={asset.change1h >= 0 ? 'positive' : 'negative'}>
                  {asset.change1h}%
                </td>
                <td className={asset.change24h >= 0 ? 'positive' : 'negative'}>
                  {asset.change24h}%
                </td>
                <td className={asset.change7d >= 0 ? 'positive' : 'negative'}>
                  {asset.change7d}%
                </td>
                <td>${asset.marketCap}</td>
                <td>${asset.volume24h}</td>
                <td>{asset.circulatingSupply}</td>
                <td>{asset.maxSupply}</td>
                <td>
                  <div className="chart-placeholder">
                    📈
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
