const jwt=require('jsonwebtoken')

// const verifyToken=async(req,res,next)=>{
    // const auth=req.headers['authorization'];
    // console.log("Authorization header:", auth); 
    // const token=auth && auth.split(" ")[1];

    // if(!token || token=='' || token.length==0){
    //     return res.status(401).json({message:"Acess token missing"});
    // }
    // jwt.verify(token,process.env.JWT_SECRET,(err,decoded)=>{
    //     if(err){
    //         return res.status(403).json({message:"Invalid or expired Token"});
    //     }
    //     req.user=decoded;
    //     next();
    // })
    
// }
const verifyToken = (req, res, next) => {
    // console.log("Auth header:", req.headers['authorization']);
 
    const authHeader = req.headers.authorization;
 
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Login First" });
    }
 
    const token = authHeader.split(" ")[1];
 
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        if(req.user.role !== "admin"){
            return res.status(400).json({message: "Not an Admin"})
        }
        next();
    } catch (err) {
        return res.status(401).json({ message: "Invalid Token" });
    }
};
module.exports=verifyToken;