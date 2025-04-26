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
    breakpoints: {
      1024: {
        perPage: 2,
      },
      640: {
        perPage: 1,
      },
    },
  };

  return (
    <div className="main-container">
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
          <div className="dialog-button-container">
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

      <div className="slider-container">
        <Splide options={options}>
          <SplideSlide onClick={handleOpen}>
            <img
              src={BelaFera}
              alt="A Bela e a Fera"
              width="294"
              height="412"
              style={{ display: "block", margin: "0 auto" }}
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src={BelaFera}
              alt="A Bela e a Fera"
              width="294"
              height="412"
              style={{ display: "block", margin: "0 auto" }}
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src={BelaFera}
              alt="A Bela e a Fera"
              width="294"
              height="412"
              style={{ display: "block", margin: "0 auto" }}
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src={BelaFera}
              alt="A Bela e a Fera"
              width="294"
              height="412"
              style={{ display: "block", margin: "0 auto" }}
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src={BelaFera}
              alt="A Bela e a Fera"
              width="294"
              height="412"
              style={{ display: "block", margin: "0 auto" }}
            />
          </SplideSlide>
        </Splide>
        <div className="button-wrapper">
          <Button
            variant="contained"
            color="info"
            sx={{ boxShadow: 'none', border: 'none', color: 'white', fontWeight: '700' }}
            onClick={handleOpen}
          >
            Assistir
          </Button>
        </div>
      </div>
    </div>
  );
}
