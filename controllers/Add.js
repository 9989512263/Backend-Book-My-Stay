
const Hotel = require('../models/Hotel');

const Add=async (req, res) => {
  const { name, location, rating, price, img } = req.body;

  try {
    const newHotel = new Hotel({ name, location, rating, price, img });
    await newHotel.save();
    res.status(201).json({ message: 'Hotel added successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to add hotel', error: error.message });
  }
};

module.exports = Add;
