import { updatePrice } from "./cryptoSlice";
import { store } from "../../app/store";

const simulateLiveData = () => {
  setInterval(() => {
    const currentAssets = store.getState().crypto.assets;

    const updatedAssets = currentAssets.map((coin) => {
      const randomChange = () => (Math.random() * 6) / 100;

      const priceChangeFactor = 1 + randomChange();
      const newPrice = coin.price * priceChangeFactor;

      const new1hChange = parseFloat(
        (coin.change1h + randomChange() * 100).toFixed(2)
      );
      const new24hChange = parseFloat(
        (coin.change24h + randomChange() * 100).toFixed(2)
      );
      const new7dChange = parseFloat(
        (coin.change7d + randomChange() * 100).toFixed(2)
      );

      const newVolume =
        parseFloat(coin.volume24h.replace(/[^0-9.]/g, "")) *
        (1 + randomChange());

      const formatLargeNumber = (num) => {
        if (num >= 1e12) return `$${(num / 1e12).toFixed(2)}T`;
        if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`;
        if (num >= 1e6) return `$${(num / 1e6).toFixed(2)}M`;
        return `$${num.toFixed(2)}`;
      };

      return {
        ...coin,
        price: parseFloat(newPrice.toFixed(2)),
        change1h: new1hChange,
        change24h: new24hChange,
        change7d: new7dChange,
        volume24h: formatLargeNumber(newVolume),
      };
    });

    store.dispatch(updatePrice(updatedAssets));
  }, 2000);
};

export default simulateLiveData;
