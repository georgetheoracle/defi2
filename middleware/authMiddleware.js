import jwt from 'jsonwebtoken';

export default  async(req, res, next)=>{
    try {
        const token = req.headers['authorisation'].split(" ")[1]
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded)=>{
        if(err){
            return res.status(401).json({message: "Auth failed", success: false})
        }else{
            req.userId = decoded.id;
            next();
        }
    })
    } catch (error) {
        return res.status(401).json({message: "Auth failed", success: false, error})
    }
}