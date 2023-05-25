import React, { useEffect, useState } from "react";
import Card from "@/components/Card";
import Header from "@/components/Header";

export default function HomePage() {
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    async function startFetching() {
      const response = await fetch("/api/crypto");
      const cryptoData = await response.json();
      const cryptos = cryptoData.results;

      setCryptos(cryptos);
    }

    startFetching();
  }, []);

  console.log(cryptos);
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
