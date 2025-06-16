const Hotel = require('../models/hotelModel')
 
const fetchHotel = async(req, res)=>{
    try{
        const hotels = await Hotel.find();
        return res.status(200).json(hotels)
    }catch(error){
        return res.status(400).json({ error:error.message})
    }
}

const fetchHotelById = async (req, res) => {
    try {
        const hotel = await Hotel.findById(req.params.id); 
        if (!hotel) {
            return res.status(404).json({ message: "Hotel not found" });
        }
        return res.status(200).json(hotel);
    } catch (error) {
        return res.status(500).json({ message: "Error fetching hotel", error: error.message });
    }
}

const fetchHotelsByCity = async (req, res) => {
    try {
        const{city}=req.body
        const hotels = await Hotel.findOne({ city});

    
        return res.status(200).json(hotels);
    } catch (error) {
        return res.status(500).json({ message: "Error fetching hotels by city", error: error.message });
    }
};

module.exports = { fetchHotel, fetchHotelById,fetchHotelsByCity };
