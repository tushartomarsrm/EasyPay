import React, { useEffect, useState } from 'react';
import SideBar from '../components/SideBar';
import { useAuth } from '../store/auth';
import { Typography, MenuItem, TextField, Box, Select, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
const SendMoney = () => {
  const navigate = useNavigate()
  const [inputs, setInputs] = useState({
    from_account: '',
    to_account: '',
    amount: '',
    currency: 'INR'
  });
  const { authToken } = useAuth();
  const [acNo, setAcNo] = useState([]);
  const [isLoading, setIsLoading] = useState(false); 

  const getAccounts = async () => {
    try {
      const response = await fetch("https://webminds-2-1.onrender.com/api/account/getUserAccounts", {
        method: "GET",
        headers: {
          Authorization: authToken,
        }
      })
      if (response.ok) {
        const data = await response.json();
        let len = data.length
        for (let i = 0; i < len; i++) {
          acNo.push(data[i].account_no)
          setAcNo(acNo)
        }
      } else {
        setAcNo(["***************"]);
      }

    }
    catch (err) {
      toast.error(err);
    }
  }

  useEffect(() => {
    setAcNo([]);
    getAccounts();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); 
    delete inputs['currency'];

    try {
      const response = await fetch("https://webminds-2-1.onrender.com/api/payments/makePayment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": authToken
        },
        body: JSON.stringify(inputs)
      })

      if (response.ok) {
        navigate('/Dashboard')
        toast.success('Payment Successfull!')
      } else {
        toast.error('Some error occured!')
      }
    } catch (err) {
      toast.error(err)
    }
    setIsLoading(false); 
    setInputs({
      from_account: '',
      to_account: '',
      amount: '',
      currency: 'INR'
    });
  };

  const handleCancel = () => {
    setInputs({
      from_account: '',
      to_account: '',
      amount: '',
      currency: 'INR',
    });
    setIsLoading(false)
  };

  return (
    <Box className="sendMoneyForm" sx={{ display: 'flex',flexDirection: 'column', alignItems: 'center', marginLeft: '10rem', position: 'relative' }}>
      <SideBar />
      <Typography
      className='sendMoneyHeading' 
      variant="h4" style={{ textAlign: 'center', color: 'black', marginBottom: '30px', fontFamily: 'times-new-roman', marginTop: '2rem' }}>Send Money</Typography>

      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            flexDirection: "column",
            margin:'auto'
          }}
        >
          <CircularProgress color="inherit" />
          <Typography variant="h5" sx={{ color: 'black' }}>Loading...</Typography>
        </Box>
      ) : (
        <form onSubmit={handleSubmit}>
          <Box
            bgcolor="inherit"
            color="#fff"
            textAlign="center"
            position="relative"
          >
            <TextField
              className='sendMoneyBox'
              fullWidth
              select
              label="Select Account"
              name="from_account"
              value={inputs.from_account}
              onChange={handleChange}
              variant="outlined"
              style={{
                marginTop: '30px',
                textAlign: 'left',
                color: 'black'
              }}
            >
              {acNo.map((account, index) => (
                <MenuItem key={index} value={account}>
                  {account}
                </MenuItem>
              ))}
            </TextField>
            <TextField
            className='sendMoneyBox'
              fullWidth
              id="accountNo"
              name="to_account"
              label="Receiver Account Number"
              value={inputs.to_account}
              onChange={handleChange}
              variant="outlined"
              style={{
                marginTop: '25px',
                textAlign: 'left',
                color: 'black'
              }}
              inputProps={{
                maxLength: 12
            }}
            error={inputs.to_account.length !== 12 && inputs.to_account.length>0} // Add error state if length is not 12
            helperText={inputs.to_account.length !== 12 && inputs.to_account.length>0 ? "Account number must be exactly 12 characters" : ""}
           
            />
            <Box display="flex" alignItems="center">
              <Box className="amount-container" margin="auto" marginTop={'1.4rem'}>
                <TextField
                  className='sendMoneyAmount'
                  type="text"
                  id="Amount"
                  name="amount"
                  label='Amount'
                  value={inputs.amount}
                  onChange={handleChange}
                  style={{
                    width: '380px',
                    marginRight: '20px'
                  }}
                  variant="outlined"
                  error={inputs.amount <= 0 && inputs.amount.length!=0} 
                  helperText={inputs.amount <= 0 && inputs.amount.length!=0? "Amount must be greater than 0" : ""}
                />
              </Box>
              <Box className="currency-select" margin="auto">
                <Select
                  name="currency"
                  value={inputs.currency}
                  onChange={handleChange}
                  style={{
                    marginTop: '20px',
                    height: '55px',
                    padding: '8px',
                    borderRadius: '5px',
                  }}
                  variant="outlined"
                >
                  <MenuItem value="INR">INR</MenuItem>
                </Select>
              </Box>
            </Box>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4rem' }}>
              <button
                onClick={handleCancel}
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#E97451',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  marginRight: '5rem',
                  fontSize: '1.2rem',
                  fontFamily: 'serif'
                }}
              >
                Cancel
              </button>
              <button
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#3A833A',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontSize: '1.2rem',
                  fontFamily: 'serif',
                }}
                type="submit"
              >
                Confirm
              </button>
            </div>
          </Box>
        </form>
      )}
    </Box>
  )
}

export default SendMoney;






