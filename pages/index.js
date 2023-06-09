import Card from "@/components/Card";
import Header from "@/components/Header";
import coinData from "@/db/db.json";

export default function HomePage() {
  return (
    <div>
      <Header />
      <ul>
        {coinData.map((coin) => (
          <Card key={coin.name} name={coin.name} price={coin.price} />
        ))}
      </ul>
    </div>
  );
}
