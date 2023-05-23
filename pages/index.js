import React, { useEffect, useState } from "react";
import Card from "@/components/Card";
import Header from "@/components/Header";

export default function HomePage() {
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    async function startFetching() {
      const response = await fetch(
        "https://api.polygon.io/v2/aggs/grouped/locale/global/market/crypto/2023-05-22?apiKey=tgmy3Uasr3HfP7yyZ6UmwslF9LiHoGjr"
      );
      const cryptoData = await response.json();
      const cryptos = cryptoData.results;

      setCryptos(cryptos);
    }

    startFetching();
  }, []);

  return (
    <div>
      <Header />
      <ul>
        {cryptos.map((crypto) => (
          <Card key={crypto.T} name={crypto.T} price={crypto.c} />
        ))}
      </ul>
    </div>
  );
}
