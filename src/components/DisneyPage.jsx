import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { DialogTitle, DialogContent, Dialog, Button } from "@mui/material";
import './style.css';
import { movies } from "../moviesBase";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useNavigate } from 'react-router-dom';

export default function DisneyPage() {
  const [open, setOpen] = React.useState(false);
  const [activeMovieId, setActiveMovieId] = React.useState(null);
  const [activeMovieName, setActiveMovieName] = React.useState(null);
  const [activeMovieUrl, setActiveMovieUrl] = React.useState(null);

  const navigate = useNavigate();

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const options = {
    pagination:false,
    perPage: 3,
    focus: 'center',
    arrows: true,
    gap: '0px',
    trimspace: false,
    breakpoints: {
      1024: {
        perPage: 2,
        arrows: false,
      },
      640: {
        perPage: 1,
        arrows: false,
      },
    },
  };

  const handleMoved = (splide, newIndex) => {
    const movieId = movies[newIndex].id;
    setActiveMovieId(movieId);
    setActiveMovieName(movies[newIndex].title);
    setActiveMovieUrl(movies[newIndex].videoUrl);

  }

  return (
    <div className="main-container" style={{ backgroundColor: '#060D17', color: 'white', fontWeight: '700', display: 'flex', flexDirection:'column', justifyContent: 'center'}}>
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
            {activeMovieName}
          </DialogTitle>
          <iframe style={{border:'none', backgroundColor:'black'}} src={activeMovieUrl}
          allowfullscreen="allowfullscreen"
          mozallowfullscreen="mozallowfullscreen" 
          msallowfullscreen="msallowfullscreen" 
          oallowfullscreen="oallowfullscreen" 
          webkitallowfullscreen="webkitallowfullscreen"
          width="400" height="300"> </iframe> 
          <div className="dialog-button-container">
            <Button
              onClick={handleClose}
              variant="contained" 
              color="info dark"
              sx={{ boxShadow:'none', border:'none', color:'white', marginBottom: '0px', marginTop: "5px", fontWeight:'700' }}
            >
              Fechar
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <div className="slider-container">
        <Splide options={options} onMoved={handleMoved}>
          {movies.map((movie) => (
            <SplideSlide key={movie.id}>
              <div className="movie-card">
                <img style={{ display: "block", margin: "0 auto" }} width="294" height="412" src={movie.image} alt={movie.title} className="movie-image" />
              </div>
            </SplideSlide>
          ))}

        </Splide>
        <div className="button-wrapper" style={{ display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center', gap: '20px', marginTop:'20px' }}>
            <Button startIcon={<PlayArrowIcon/>} variant="contained" sx={{backgroundColor:'white', color:'black', boxShadow:'none', border:'none', fontWeight:'700'} } onClick={handleOpen}>Assistir</Button>
            <Button startIcon={<ArrowBackIosIcon/>} variant="outlined" color="info dark" sx={{boxShadow:'none', border:'none', color:'white', fontWeight:'700', marginBottom:'100px'} } onClick={() => navigate('/')}>Voltar</Button>
        </div>
      </div>
    </div>
  );
}
