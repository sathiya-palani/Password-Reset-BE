
const  bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const generateToken = (user) =>jwt.sign({id:user.id}, process.env.SECRET_KEY, {expiresIn:"120m"})
// function generateToken(user) {
//     const payload = {
//       id: user.id,
//       email: user.email
//     };
    
  //   const SECRET_KEY = 'your-secret-key';
  //   const options = { expiresIn: '1h' };
  
  //   return jwt.sign(payload, SECRET_KEY, options);
  // }


const hashPassword = async(password)=>{
    
    let hash = await bcrypt.hash(password,10)
    return hash;
}



module.exports = {  generateToken ,hashPassword};
   
  
