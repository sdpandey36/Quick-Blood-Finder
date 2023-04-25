import React, { useState } from 'react'
import { Button} from 'antd'
import "react-toastify/dist/ReactToastify.css";
import {ToastContainer,toast} from "react-toastify";

const EmailButton = ({name,email}) => {
    const sendEmail = async (e) => {
        toast.loading("Sending email...")
        e.preventDefault();
        // messageApi.info('Messege was sent to Donars Successfully!');
        const res = await fetch("/sendEmail", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email:email
            })
        });
        if(res.status === 201){
            toast.dismiss();
            toast.success("Email sent successfully");
        }
        else{
            toast.dismiss();
            toast.error("Error sending email"); 
        }
    }
  return (
    <>
    < Button id="send-btn" type="submit" onClick={sendEmail}>
    Send
    </Button>
    <ToastContainer />
    </>
  )
}

export default EmailButton