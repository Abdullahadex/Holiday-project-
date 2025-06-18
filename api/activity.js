export default async function handler(req, res) {
  // Disable caching for this API route
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  res.setHeader('Surrogate-Control', 'no-store');
  const { type } = req.query;
  const url = type
    ? `https://bored-api.appbrewery.com/random?type=${type}`
    : `https://bored-api.appbrewery.com/random`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: 'Failed to fetch activity' });
  }
} 