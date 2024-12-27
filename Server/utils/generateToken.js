import jwt  from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId, res)=>{
    const token = jwt.sign({userId}, process.env.JWT_SECERET ,{
        expiresIn: "1d"
    })

    res.cookie("jwt",token,{
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpOnly: true, // prevent xss attacks http attacks not acessible via js 
        sameSite:"strict",
        secure: process.env.NODE_ENV !== "development",
    })
};

export default generateTokenAndSetCookie;