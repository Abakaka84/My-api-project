const express = require("express");
const cors = require("cors");
const app = express();

// تفعيل CORS للسماح بالطلبات من RapidAPI وأي مكان
app.use(cors());
app.use(express.json());

// بيانات الفنادق
const hotels = [
  {
    name: "Hilton Cairo",
    city: "Cairo",
    country: "Egypt",
    rating: 4.5
  },
  {
    name: "Radisson Blu",
    city: "N'Djamena",
    country: "Chad",
    rating: 4.0
  }
];

// Endpoint لجلب الفنادق
app.get("/hotels", (req, res) => {
  const { city } = req.query;

  if (city) {
    const filtered = hotels.filter(h =>
      h.city.toLowerCase().includes(city.toLowerCase())
    );
    return res.json(filtered);
  }

  res.json(hotels);
});

// تشغيل السيرفر على أي بورت متاح (Render يستخدم process.env.PORT)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
