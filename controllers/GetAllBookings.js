const Booking = require('../models/BookingModel');

const GetAllBookings=async(req,res) =>{
  try {
    const bookings = await Booking.find().select('userEmail hotelName guests totalPrice roomNumber checkInDate checkOutDate -_id');
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch booking summary', error: error.message });
  }
};

module.exports = GetAllBookings;
