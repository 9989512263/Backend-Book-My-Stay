const Hotel = require('../models/hotelModel');

const FetchHotelByCity = async (req, res) => {
    const city = req.params.city;
    try {
        const hotels = await Hotel.find({ city: { $regex: new RegExp(`^${city}$`, 'i') } });
        res.status(200).json(hotels);
    } catch (error) {
        console.error('Error fetching hotels by city:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
module.exports = FetchHotelByCity;