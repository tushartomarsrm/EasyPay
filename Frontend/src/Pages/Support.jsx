
import React from 'react';
import { Accordion, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SideBar from '../components/SideBar';

const Support = () => {
  const faqData = [
    {
      question: 'How to use UPI?',
      answer: 'To use UPI, follow these steps:\n1. Open your banking app.\n2. Go to the UPI section.\n3. Choose the option to send money.\n4. Enter the recipient\'s UPI ID or mobile number.\n5. Enter the amount and a description for the transaction.\n6. Confirm the transaction using your UPI PIN.'
    },
    {
      question: 'How to find UPI ID?',
      answer: 'To find your UPI ID:\n1. Open your banking app.\n2. Go to the receive money section.\n3.Your UPI ID should be displayed on the screen.'
    },
    {
      question: 'Transaction Limits',
      answer: 'The transaction limits for UPI transactions vary depending on your bank and account type. Generally, there are limits on the maximum amount you can send per transaction and per day. These limits are set by the NPCI (National Payments Corporation of India) and your bank. You can check with your bank or refer to their website for details on transaction limits.'
    },
    {
      question: 'How to link multiple bank accounts to UPI?',
      answer: 'To link multiple bank accounts to UPI, follow these steps:\n1. Open your banking app.\n2. Go to the add bank account section.\n3.Select your bank and follow the on-screen instructions to link the account to UPI.'
    },
    {
      question: 'What to do if UPI transaction fails?',
      answer: 'If a UPI transaction fails, follow these steps:\n1. Check your internet connection and ensure that you have sufficient funds in your account.\n2. Verify the recipient\'s UPI ID or mobile number.\n3. Wait for a few minutes and try the transaction again.\n4. If the issue persists, contact your bank or payment service provider for assistance.'
    },
    {
      question: 'Is UPI safe for online transactions?',
      answer: 'Yes, UPI is considered safe for online transactions. It uses advanced encryption and authentication measures to ensure the security of transactions. However, it is essential to follow best practices such as not sharing your UPI PIN with anyone and using secure networks for transactions.'
    },
    {
      question: 'How to change password?',
      answer: 'To reset your password, follow these steps:\n1. Open your banking app.\n2. Go to the security settings.\n3. Change the password by verifying old password and providing the new password.'
    },
    {
      question: 'What is the validity of UPI transaction?',
      answer: 'The validity of a UPI transaction depends on various factors such as the payment service provider, bank, and type of transaction. Generally, most UPI transactions have a validity period of 24 hours. If the transaction is not completed within this period, it may be canceled or expire.'
    },
  ];

  return (
    <div style={{ display: 'flex' }}>
      <SideBar />
      <div style={{ marginLeft: '5rem' }}>
        <div style={{ marginTop: '2rem', marginBottom: '2rem' }}>
          <Typography className='faq-heading' variant="h4" style={{ color: 'black', marginBottom: '20px',fontFamily:'times-new-roman' }}>Frequently Asked Questions</Typography>
          {faqData.map((faq, index) => (
            <Accordion key={index} style={{ marginBottom: '10px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', borderRadius: '4px', width: '80%' }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`faq-content-${index}`}
                id={`faq-header-${index}`}
                style={{ backgroundColor: 'white', color: 'black', borderBottom: '1px solid #ccc', borderRadius: '4px', '&:hover': { backgroundColor: '#303f9f'} }}
              >
                <Typography variant="h6" sx={{fontFamily:'serif' }}>{faq.question}</Typography>
              </AccordionSummary>
              <Typography style={{ backgroundColor: 'white', padding: '10px', borderRadius: '4px', borderTop: '1px solid #ccc' }}>{faq.answer}</Typography>
            </Accordion>
          ))}
          <Typography variant="h5" style={{ marginTop: '20px', alignSelf: 'center', color: 'black',fontFamily:'serif' }}>For further queries, contact us.</Typography>
        </div>
      </div>
    </div>
  );
};

export default Support;
