const express=require("express");
const { signUp } = require("./controllers/userSignup");
const getAllUsers = require("./controllers/getallUsers");
const { adminsignUp } = require("./controllers/adminsignup");
const Signin = require("./controllers/Signin");
const addHotel = require("./controllers/addHotel");
const updateHotel = require("./controllers/updateHotel");
const {fetchHotel,fetchHotelById} = require("./controllers/getallHotels");
const deleteHotel = require("./controllers/deleteHotel");
const addRoomToHotel = require("./controllers/addRoom");
const { sendOTP, verifyOTP, resetPassword } = require("./controllers/forgotpassword");
const SubSuccess = require("./controllers/SubSuccess");
const Add = require("./controllers/Add");
// const Booking = require("./controllers/Booking");
const RoomBooking = require("./controllers/Booking");
const { createPaymentIntent } = require("./controllers/Payment");




const router=express.Router();




//user module
router.post("/signup",signUp);
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
router.delete("/deletehotel",deleteHotel);
router.post("/book",RoomBooking)

router.post('/addhotel',addHotel)
//room module
router.post("/addroom",addRoomToHotel);
router.post("/subsuccess",SubSuccess);
router.post("/add",Add)


//payment 
router.post('/payment',createPaymentIntent)

module.exports=router;

