import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import ExampleVideo from "./ExampleVideo";
import { DialogTitle, DialogContent, Dialog, Button } from "@mui/material";
import './style.css';
import BelaFera from './BelaFera.jpg';

export default function MainPage() {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const options = {
    pagination: false,
    perPage: 3,      
    focus: 'center',  
    gap: '0px',   
    trimspace: false,    
  };

  return (
    <div
      style={{
        backgroundColor: "#060D17",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <DialogContent sx={{ backgroundColor: '#060D17' }}>
          <DialogTitle
            sx={{
              backgroundColor: '#060D17',
              color: 'white',
              fontWeight: '700',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            A Bela e a Fera
          </DialogTitle>
          <ExampleVideo />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              borderRadius: '30px',
            }}
          >
            <Button
              onClick={handleClose}
              variant="contained"
              color="secondary"
              sx={{ marginBottom: '0px', marginTop: "5px" }}
            >
              Fechar
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <div style={{ width: "65%" }}>
        <Splide options={options}>
          <SplideSlide>
            <img
              src={BelaFera}
              alt="A Bela e a Fera"
              width="294"
              height="412"
              style={{ display: "block" }}
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src={BelaFera}
              alt="A Bela e a Fera"
              width="294"
              height="412"
              style={{ display: "block" }}
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src={BelaFera}
              alt="A Bela e a Fera"
              width="294"
              height="412"
              style={{ display: "block" }}
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src={BelaFera}
              alt="A Bela e a Fera"
              width="294"
              height="412"
              style={{ display: "block" }}
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src={BelaFera}
              alt="A Bela e a Fera"
              width="294"
              height="412"
              style={{ display: "block" }}
            />
          </SplideSlide>
        </Splide>
        <div style={{paddingTop:'30px'}}>
            <Button variant="contained" color="info dark" sx={{boxShadow:'none', border:'none', color:'white', fontWeight:'700'} } onClick={handleOpen}>Assistir</Button>
        </div>
      </div>
    </div>
  );
}
