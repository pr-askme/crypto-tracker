import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  assets: [
    {
      id: 1,
      name: "Bitcoin",
      symbol: "BTC",
      price: 72450.38,
      change1h: 0.27,
      change24h: -1.83,
      change7d: 5.42,
      marketCap: "1.41T",
      volume24h: "28.5B",
      circulatingSupply: "19.6M",
      maxSupply: "21M",
      logo: "/assets/btc-logo.png",
    },
    {
      id: 2,
      name: "Ethereum",
      symbol: "ETH",
      price: 3850.72,
      change1h: 0.55,
      change24h: -2.31,
      change7d: 3.78,
      marketCap: "462.8B",
      volume24h: "15.2B",
      circulatingSupply: "120.2M",
      maxSupply: "∞",
      logo: "/assets/ethereum-logo.png",
    },
    {
      id: 3,
      name: "Binance Coin",
      symbol: "BNB",
      price: 625.41,
      change1h: 0.12,
      change24h: -0.89,
      change7d: 2.15,
      marketCap: "96.3B",
      volume24h: "1.8B",
      circulatingSupply: "154.0M",
      maxSupply: "200M",
      logo: "/assets/bnb-logo.png",
    },
    {
      id: 4,
      name: "Tether",
      symbol: "USDT",
      price: 1.0,
      change1h: 0.01,
      change24h: 0.0,
      change7d: -0.01,
      marketCap: "110.5B",
      volume24h: "52.3B",
      circulatingSupply: "110.4B",
      maxSupply: "∞",
      logo: "/assets/tether-usdt-logo.png",
    },
    {
      id: 5,
      name: "XRP",
      symbol: "XRP",
      price: 0.62,
      change1h: 0.33,
      change24h: -1.22,
      change7d: 4.56,
      marketCap: "33.7B",
      volume24h: "2.1B",
      circulatingSupply: "54.4B",
      maxSupply: "100B",
      logo: "/assets/xrp-logo.png",
    },
  ],
  status: "idle",
  error: null,
};

const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {
    updatePrice: (state, action) => {
      state.assets = action.payload;
    },
  },
});

const cryptoReducer = cryptoSlice.reducer;
export const { updatePrice } = cryptoSlice.actions;
export default cryptoReducer;
