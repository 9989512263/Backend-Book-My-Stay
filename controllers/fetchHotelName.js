const Hotel = require('../models/hotelModel')
const fetchHotelNames = async (req, res) =>{
    try{
        const hotels= await Hotel.find({}, "name hotelId" );
        const hotelList = hotels.map(hotel=>({
            hotelId : hotel.hotelId,
            name : hotel.name
        }));
        return res.status(200).json({hotelList: hotelList})
    }catch(error){
        return res.status(500).json({message:"Error fetching Hotel names and Ids", error:error.message})
    }
}
module.exports=fetchHotelNames;