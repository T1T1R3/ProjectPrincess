import React from "react";
import '@splidejs/react-splide/css';
import { DialogTitle, DialogContent, Dialog, Button } from "@mui/material";
import './style.css';
import { movies } from "../moviesBase";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useNavigate } from 'react-router-dom';
import SearchBar from "./SearchBar";
import MovieCarousel from "./MovieCarousel";

import BrancaNeve from "../moviesBackground/Disney/BrancaNeve.webp";
import BelaAdormecida from "../moviesBackground/Disney/BelaAdormecida.webp";
import Cinderella from "../moviesBackground/Disney/Cinderella.jpg";

export default function DisneyPage() {
  const [open, setOpen] = React.useState(false);
  const [activeMovieName, setActiveMovieName] = React.useState(null);
  const [activeMovieUrl, setActiveMovieUrl] = React.useState(null);
  const [activeMovieId, setActiveMovieId] = React.useState(null);
  const [searchTerm, setSearchTerm] = React.useState('');

  const [backgroundImage, setBackgroundImage] = React.useState(BrancaNeve);



  const navigate = useNavigate();

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const handleMoved = (movie) => {
    console.log(movie);
    if (movie) {
      setActiveMovieId(movie.id);
      setActiveMovieName(movie.title);
      setActiveMovieUrl(movie.videoUrl);
      if(movie.id === 1){
        setBackgroundImage(BrancaNeve);
      }
      else if(movie.id === 2){
        setBackgroundImage(BelaAdormecida);
      }
      else{
        setBackgroundImage(Cinderella);
      }
    }
  };

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );

  return (
    <div
      className="main-container"
      style={{
        backgroundColor: '#060D17',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: 'white',
        fontWeight: '700',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    >
      <div style={{width:'100%', height:'100%', position:'relative', display:'flex', justifyContent:'center', alignItems:'center', backdropFilter:'blur(10px)'}}>
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
          <iframe
            style={{ border: 'none', backgroundColor: 'black' }}
            src={activeMovieUrl}
            allowFullScreen
            mozallowfullscreen="mozallowfullscreen"
            msallowfullscreen="msallowfullscreen"
            oallowfullscreen="oallowfullscreen"
            webkitallowfullscreen="webkitallowfullscreen"
            width="400"
            height="300"
          />
          <div className="dialog-button-container">
            <Button
              onClick={handleClose}
              variant="contained"
              color="info dark"
              sx={{
                boxShadow: 'none',
                border: 'none',
                color: 'white',
                marginBottom: '0px',
                marginTop: "5px",
                fontWeight: '700'
              }}
            >
              Fechar
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      

      <div className="slider-container">
        <MovieCarousel
          movies={filteredMovies}
          searchTerm={searchTerm}
          onMovieSelect={handleMoved}
          activeMovieId={activeMovieId}
        />

        {searchTerm.trim() !== "" && filteredMovies.length === 0 && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              fontSize: '30px'
            }}
          >
            Nenhum filme encontrado
          </div>
        )}

        <div
          className="button-wrapper"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px',
            marginTop: '20px',
          }}
        >
          <Button
            startIcon={<PlayArrowIcon />}
            variant="contained"
            sx={{
              backgroundColor: 'white',
              color: 'black',
              boxShadow: 'none',
              border: 'none',
              fontWeight: '700'
            }}
            onClick={handleOpen}
          >
            Assistir
          </Button>
          <Button
            startIcon={<ArrowBackIosIcon />}
            variant="outlined"
            color="info dark"
            sx={{
              boxShadow: 'none',
              border: 'none',
              color: 'white',
              fontWeight: '700',
              marginBottom: '100px'
            }}
            onClick={() => navigate('/')}
          >
            Voltar
          </Button>
        </div>
        <div>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
      </div>
      </div>
    </div>
  );
}
