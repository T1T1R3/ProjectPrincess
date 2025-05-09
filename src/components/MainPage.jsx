import React from "react";
import { Box, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import './style.css';
import Castle1 from '../moviesCover/castle1.jpg';
import Castle2 from '../moviesCover/castle2.jpg';
import Castle3 from "../moviesCover/castle3.webp";
import Barbie from '../moviesCover/Barbie.png';
import Disney from '../moviesCover/Disney.png';
import Ghibli from "../moviesCover/ghibli.png"
export default function MainPage() {
  const navigate = useNavigate();
  const [focusedSide, setFocusedSide] = React.useState("right");

  const handleLeave = () => setFocusedSide("none");

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' }, 
        width: '100vw',
        height: '100vh',
      }}
    >

      <Box
        onMouseEnter={() => setFocusedSide("left")}
        onMouseLeave={handleLeave}
        onClick={() => setFocusedSide("left")}
        sx={{
          flex: 1,
          backgroundImage: `url(${Castle1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          filter: (focusedSide === "right" || focusedSide === "ghibli") ? "brightness(0.5)" : "brightness(1)",
          transition: "filter 0.3s",
        }}
      >
        <IconButton sx={{maxWidth:'300px'}} onClick={() => {
            setFocusedSide("right");
            navigate('/barbie');
          }} >
            <img src={Barbie} alt="Disney" style={{ width:'90%'}} />
        </IconButton>
        
      </Box>

      <Box
        onMouseEnter={() => setFocusedSide("right")}
        onMouseLeave={handleLeave}
        onClick={() => setFocusedSide("right")}
        sx={{
          flex: 1,
          backgroundImage: `url(${Castle2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          filter: (focusedSide === "left" || focusedSide === "ghibli") ? "brightness(0.5)" : "brightness(1)",
          transition: "filter 0.3s",
        }}
      >
        <IconButton sx={{maxWidth:'300px'}} onClick={() => {
            setFocusedSide("right");
            navigate('/disney');
          }} >
            <img src={Disney} alt="Disney" style={{ width:'100%'}} />
        </IconButton>
      </Box>
      <Box
        onMouseEnter={() => setFocusedSide("ghibli")}
        onMouseLeave={handleLeave}
        onClick={() => setFocusedSide("ghibli")}
        sx={{
          flex: 1,
          backgroundImage: `url(${Castle3})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          filter: (focusedSide === "left" || focusedSide === "right") ? "brightness(0.5)" : "brightness(1)",
          transition: "filter 0.3s",
        }}
      >
        <IconButton sx={{maxWidth:'300px'}} onClick={() => {
            setFocusedSide("ghibli");
            navigate('/ghibli');
          }} >
            <img src={Ghibli} alt="Disney" style={{ width:'300px'}} />
        </IconButton>
      </Box>
    </Box>
  );
}
