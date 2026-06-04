export default async function handler(req, res) {
  const { API_KEY } = process.env;

  try {
    const response = await fetch(
      `https://api.polygon.io/v2/aggs/grouped/locale/global/market/crypto/2023-05-22?apiKey=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error("Request failed with status: " + response.status);
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "Something went wrong" });
  }
}
