import './contact.scss'
import { InputLabel, Card,Input, CardContent, Grid, TextField, Button, Box} from '@material-ui/core'
import { useRef, useLayoutEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from "@emailjs/browser"
export default function Contact() {
  useLayoutEffect(() => {
    setTimeout(AOS.init({
      duration:1000
    }),10)
    AOS.refresh();
  }, []);
  const refForm= useRef()
  const sendEmail = (e)=>{
    e.preventDefault();

    emailjs.sendForm('YOUR SERVICE ID', 'YOUR TEMPLATE ID', refForm.current, 'YOUR PUBLIC KEY')
    .then(function() {
      console.log('SUCCESS!');
      alert('Success!')
  })
    
  }
  return (
    
    <div className="contact" id="Contact">
      
      <div className="left">
        <img src="../../images/logo.svg" alt="" />
     
      </div>
      <div className="right">
        <h2>Contact</h2>
        <div className="card">
          <Card sx={{overflow:'hidden',
            padding: 10}}>
            <CardContent style={{backgroundColor: '#fff', overflow:'hidden'}}>
              <form ref={refForm} onSubmit={sendEmail}>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField
                    label="First Name"
                    name="from_name"
                    id='from_name'
                    type='text'
                    placeholder="Enter First Name"
                    fullWidth
                  > <input type="text" name="from_name"> </input></TextField>
                </Grid>
                <Grid xs={12} sm={6} item>
                    <TextField
                      label="Last Name"
                      id='last_name'
                      name='last_name'
                      placeholder="Enter Last Name"
                      fullWidth
                      id="component-helper"
                      
                      aria-describedby="component-helper-text"
                    />

                </Grid>
                <Grid xs={12} item>
                  <TextField
                    type="email"
                    label="Email"
                    name="user_email"
                    id='user_email'
                    placeholder="Enter email"
                    fullWidth
                  > <input type="email" name="user_email"> </input></TextField>
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    type="message"
                    multiline
                    rows={4}
                    label="Message"
                    name='message'
                    placeholder="Send a message"
                    fullWidth
                  />
                </Grid>
                <Grid xs={12} item>
                  <Box className='boxBtn' textAlign='center'>
                  <Button
                    size="large"
                    type="submit"
                    variant="contained"
                    
                  >
                    Submit
                  </Button>
                  </Box>
                </Grid>
              </Grid>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
    
  );
}
