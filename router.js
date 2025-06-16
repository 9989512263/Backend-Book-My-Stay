const express=require("express");
const { signUp } = require("./controllers/userSignup");
const getAllUsers = require("./controllers/getallUsers");
const { adminsignUp } = require("./controllers/adminsignup");
const Signin = require("./controllers/Signin");
const addHotel = require("./controllers/addHotel");
const updateHotel = require("./controllers/updateHotel");
const {fetchHotel,fetchHotelById,fetchHotelsByCity} = require("./controllers/getallHotels");
// const deleteHotel = require('./controllers/DeleteHotel');
const addRoomToHotel = require("./controllers/addRoom");
const { sendOTP, verifyOTP, resetPassword } = require("./controllers/forgotpassword");
const SubSuccess = require("./controllers/SubSuccess");

const RoomBooking = require("./controllers/Booking");
const { createPaymentIntent } = require("./controllers/Payment");
const AdminSignin = require("./controllers/AdminSignin");
const EditHotel = require("./controllers/EditHotel");
const GetAllBookings = require("./controllers/GetAllBookings");
const verifyToken=require('./middlewares/verifyToken');
const fetchHotelNames = require("./controllers/fetchHotelName");
const FetchHotelByCity = require("./controllers/FetchHotelsByCity");
const deleteHotel = require("./controllers/deleteHotel");






const router=express.Router();




//user module
router.post("/signup",signUp);
router.post("/adminsignin",AdminSignin);
router.get("/getallusers",getAllUsers);
router.post("/adminsignup",adminsignUp);
router.post("/signin",Signin);

//forgot password
router.post("/sendotp",sendOTP);
router.post("/verifyotp",verifyOTP);
router.post("/resetpassword",resetPassword);



//hotel module
// router.post("/addhotel",addHotel);
router.post("/updateHotel",updateHotel);
router.get("/getallhotels",fetchHotel);
router.get('/hotels/:id',fetchHotelById);
router.get("/gethotelsbycity", fetchHotelsByCity);
router.post("/book",RoomBooking)

router.post('/addhotel',addHotel)

//room module
router.post("/addroom",addRoomToHotel);
router.post("/subsuccess",SubSuccess);



//payment 
router.post('/payment',createPaymentIntent)

//admin module
router.post('/edithotel',EditHotel)
router.get('/getallbookings',GetAllBookings)
router.get('/fetchhotelnames',fetchHotelNames)
router.delete("/deletehotel/:id", deleteHotel);

router.get("/fetchhotelsbycity/:city",FetchHotelByCity)
module.exports=router;

