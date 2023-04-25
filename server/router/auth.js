const express=require("express");
const nodemailer = require("nodemailer");

const router= express.Router();
require("../db/conn");
require('dotenv').config();
const User=require("../model/userSchema");

router.get("/",(req,res)=>{
res.send("from auth.js");
});

// console.log(req.body);
// res.json({message:req.body});
// res.send("my registration page.")

// router.post("/register",(req,res)=>{
//     const { name,email,phone,work,password,cpassword}=req.body;
//     if(!name || !email || !phone || !work || !password || !cpassword){
//         return  res.status(422).json({error:"Please filled the field properly"}) ;
    
//     }

//     User.findOne({email:email})
//     .then((userExist) =>{
//         if(userExist){
//             return  res.status(422).json({error:"Email already exist"}) 
            
//         }
//         const user=new User({name,email,phone,work,password,cpassword});

//         user.save().then(()=>{
//             res.status(201).json({message:"user registered successfuly"});
//         }).catch((err)=>res.status(500).json({error:"Failed to registered"}));

//     }).catch(err=>{console.log(err);});
    


// });


router.post("/register",async(req,res)=>{
    const { fullname,email,address,number,dateofbirth,dateoflastdonate,bloodgroup,gender}=req.body;
    if(!fullname || !email || !address || !number || !dateofbirth || !dateoflastdonate ||  !bloodgroup || !gender){
        return  res.status(422).json({error:"Please filled the field properly"}) ;
    
    }
    try{
        const userExist=await User.findOne({email:email})
        
            if(userExist){
                return  res.status(422).json({error:"Email already exist"}) 
                
            }
            const user=new User({fullname,email,address,number,dateofbirth,dateoflastdonate,bloodgroup,gender});
    
            await user.save();
                res.status(201).json({message:"user registered successfuly"});
           
    
        

    }
    catch(err){console.log(err);

    }

    


});

router.post("/sendEmail",  (req, res) => {

    const namelist= req.body.email;
    console.log(req.body,"Sent from frontend");

    // const { email } = req.body;
  

    try {

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            }
        });

        const mailOptions = {
          
            from: process.env.EMAIL,
            to: namelist,
            subject: "From Quick Blood Finder",
            html: '<h1>Help Please</h1> <h2> I need blood</h2><button>Accept</button>'
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log("Error" + error)
            } else {
                console.log("Email sent:" + info.response);
                res.status(201).json({status:201,info})
            }
        })

    } catch (error) {
        console.log("Error" + error);
        res.status(401).json({status:401,error})
    }
});

module.exports=router;
