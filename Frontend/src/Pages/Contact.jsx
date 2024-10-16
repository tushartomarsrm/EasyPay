
import React from 'react'
import SideBar from '../components/SideBar'
import '../styles/Contact.css'
import { Typography, Box } from '@mui/material'

const Contact = () => {
  return (
    <div style={{ display: 'flex' }}>
      <SideBar />
      <div>
        <Typography className='contact-heading' variant="h4" style={{ textAlign: 'center', color: 'black', marginBottom: '30px', fontFamily: 'times-new-roman', marginTop: '1.2rem' }}>Contact us</Typography>
        <Box maxWidth="800px" mx="auto" className='contact-box'>
          <div>
            <p>We're here to help! Whether you have questions about using our UPI payment services or need assistance with a transaction, our support team is dedicated to providing you with prompt and reliable assistance. For support inquiries, please visit our comprehensive support page at easyPay_upi@gmail.com. Here, you'll find answers to frequently asked questions, helpful tutorials, and step-by-step guides to help you make the most of our services.</p>
            <p>If you need further assistance, don't hesitate to reach out to us directly by phone at 958641335. Our friendly and knowledgeable support representatives are available during 9am to 5 pm to address any concerns you may have.</p>
            <p>Thank you for choosing easyPay for your UPI payment needs. We're committed to ensuring your experience with us is smooth, secure, and hassle-free.</p>
          </div>
        </Box>
      </div>
    </div>
  )
}

export default Contact
