import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    maxHeight: '80vh',
    overflowY: 'auto',
    bgcolor: 'background.paper',
    border: 'none',
    p: 4,
    borderRadius: 8,
    // Hide scrollbar
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    '-ms-overflow-style': 'none',  // IE and Edge
    'scrollbar-width': 'none',  // Firefox
  };
  
  export default function OrderModal({ open, handleClose, orderDetails }) {
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [phoneNumber, setPhoneNumber] = React.useState('');
    const [address1, setAddress1] = React.useState('');
    const [address2, setAddress2] = React.useState('');
    const [pincode, setPincode] = React.useState('');
    const [country, setCountry] = React.useState('');
    const [state, setState] = React.useState('');
    const [quantity, setQuantity] = React.useState(orderDetails.quantity); // Added quantity state

    const handleOrder = () => {
      const message = `Hello!\n\nI would like to place an order for the following product:\n\n*Product Title:* ${orderDetails.title}\n*Price:* ₹${orderDetails.price}\n*Quantity:* ${quantity}${
        orderDetails.length ? `\n*Length:* ${orderDetails.length} ft` : ""
      }${
        orderDetails.width ? `\n*Width:* ${orderDetails.width} ft` : ""
      }\n\nCustomer Details:\n*First Name:* ${firstName}\n*Last Name:* ${lastName}\n*Phone Number:* ${phoneNumber}\n*Address Line 1:* ${address1}\n*Address Line 2:* ${address2}\n*Pincode:* ${pincode}\n*Country:* ${country}\n*State:* ${state}\n\nCould you please provide me with the next steps? Thank you!`;
  
      const encodedMessage = encodeURIComponent(message);
      window.open(`https://wa.me/${import.meta.env.VITE_PHONE_NUMBER}?text=${encodedMessage}`, '_blank');
    };
  
    return (
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Complete Your Order
            </Typography>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Product: {orderDetails.title} | Price: ₹{orderDetails.price} 
          </Typography>
          <TextField
            fullWidth
            margin="normal"
            label="First Name"
            variant="outlined"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Last Name"
            variant="outlined"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Phone Number"
            variant="outlined"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Address Line 1"
            variant="outlined"
            value={address1}
            onChange={(e) => setAddress1(e.target.value)}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Address Line 2"
            variant="outlined"
            value={address2}
            onChange={(e) => setAddress2(e.target.value)}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Pincode"
            variant="outlined"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
          />
          <TextField
            fullWidth
            margin="normal"
            label="State"
            variant="outlined"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Country"
            variant="outlined"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <TextField // Added quantity field
            fullWidth
            margin="normal"
            label="Quantity"
            variant="outlined"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
       
          <Button
            fullWidth
            variant="contained"
            color="success"
            sx={{ mt: 2 }}
            onClick={handleOrder}
          >
            Place Order
          </Button>
        </Box>
      </Modal>
    );
  }