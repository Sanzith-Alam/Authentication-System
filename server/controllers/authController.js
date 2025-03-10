

export const register = async (requestAnimationFrame,res)=>{
    const {name, email, password}= req.body;
    if(!name || !email || !password){
        return res.json({success: false, message: "Missing Details"})
    }
    
    try{

    }catch(error){
        res.json({success: false, message: error.message})
    }
}