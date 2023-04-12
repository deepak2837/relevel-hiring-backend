//here i wiol verify the token coming from the client and if it is valid then i will allow the user to access the protected routes



import jwt from 'jsonwebtoken';


export const verify = (req, res,next) =>{
    const token = req.headers['x-access-token']
    console.log(token)
    if(!token){
        
        res.status(401).send("token not found")
        return
    }
    else{
        try{
            const decoded = jwt.verify(token, "secret")
            req.user = decoded
            
            console.log(decoded)
            
            next();
        }
        catch(err){
            res.status(400).send("token not verified")
        }
    }
}