import React from 'react'
import SideBar from '../components/SideBar'
import '../styles/Service.css'
import { Typography } from '@mui/material'
const Service = () => {
  return (
    <div style={{ display: 'flex' }}>
      <SideBar />
      <div className="service-container">
      <Typography className='service-heading' variant="h4" style={{ textAlign:'center',color: 'black', marginBottom: '30px',fontFamily:'times-new-roman',marginTop:'1.2rem' }}>Terms of Service</Typography>
        <p>
          Welcome to easyPay! These terms of service ("Terms") govern your use of <br />easyPay's website, services, and applications (collectively referred to as the<br /> "Service"). By accessing or using the Service, you agree to be bound by these<br /> Terms.<br /><br />

          1. Acceptance of Terms By using the Service, you agree to comply with and be <br />bound by these Terms.If you do not agree to these Terms, you may not use the<br /> Service.<br /><br />

          2. Description of Service easyPay provides a platform for users to make and <br />receive payments using the Unified Payments Interface (UPI). Our Service allows<br /> users to securely transfer funds between bank accounts using their UPI-enabled<br /> devices.<br /><br />
          3. User Accounts You may be required to create an account to access certain <br />features of the Service. You are responsible for maintaining the confidentiality of<br /> your account credentials and for all activities that occur under your<br /> account.<br /><br />
          4. Payment Transactions easyPay facilitates payment transactions between users.<br /> We are not a bank or financial institution and do not hold funds on behalf of users.<br /> All transactions are processed through the UPI system and are subject to the terms<br /> and conditions of the participating banks.<br /><br />

          5. User Responsibilities You agree to use the Service in accordance with all applicable<br /> laws and regulations. You are solely responsible for the accuracy and legality of<br /> any information you provide and any transactions you initiate through the Service.<br /><br />

          6. Prohibited Activities You may not use the Service for any unlawful or fraudulent<br /> purposes. Prohibited activities include, but are not limited to, money laundering, fraud,<br /> and unauthorized access to accounts or systems.<br /><br />

          7. Intellectual Property All content and materials available through the Service <br />are the property of easyPay or its licensors and are protected by copyright and other <br />intellectual property laws.<br /><br />

          8. Limitation of Liability easyPay is not liable for any damages arising out of <br />or related to your use of the Service, including but not limited to, lost profits, <br />lost data, or consequential damages.<br /><br />

          9. Changes to Terms easyPay reserves the right to modify or update these terms <br />at any time without prior notice. Your continued use of the Service after any such<br /> changes constitutes acceptance of the revised Terms.<br /><br />

          10. Termination easyPay may terminate or suspend your access to the Service<br /> at any time, with or without cause, and without prior notice.<br /><br />

          11. Governing Law These Terms are governed by and construed in accordance with <br />the laws of india, without regard to its conflict of law principles.<br /><br />
          12. Contact Us If you have any questions about these Terms, please contact us at<br /> easyPay_upi@gmail.com.<br /><br />

          By using the Service, you acknowledge that you have read, understood, and agree<br /> to be bound by these Terms. If you do not agree to these Terms, you may not use the <br />service.<br />
        </p>
      </div>
    </div>
  )
}

export default Service