import { Router } from 'express';
const router = Router();

// naive mock: returns sample hotels; if lat/lng present, add simulated distance
router.get('/', (req, res) => {
  const sample = [
    { name: 'Grand Stay Hotel', vicinity: '1 Beach Avenue', rating: 4.3, price_level: 3, url: '#' },
    { name: 'City Comfort Inn', vicinity: '12 Market St', rating: 4.0, price_level: 2, url: '#' },
    { name: 'Budget Sleep', vicinity: '45 Station Rd', rating: 3.7, price_level: 1, url: '#' },
    { name: 'Hotel Panorama', vicinity: '90 Hill Rd', rating: 4.5, price_level: 4, url: '#' }
  ];

  const { lat, lng, radius, query } = req.query;
  let out = sample;

  // if query present, do a basic filter
  if (query) {
    const q = query.toLowerCase();
    out = sample.filter(s => s.name.toLowerCase().includes(q) || (s.vicinity||'').toLowerCase().includes(q));
  }

  // if lat/lng present, attach fake distance (random within radius)
  if (lat && lng) {
    const r = Number(radius) || 3000;
    out = out.map((h, i) => ({ ...h, distance: Math.floor(Math.random()*r) }));
  }

  // simple response
  res.json(out);
});

export default router;
