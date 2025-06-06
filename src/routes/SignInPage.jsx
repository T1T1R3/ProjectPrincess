import "../style.css";
import { useState, useEffect } from "react";
import { Box, Button, TextField, InputLabel } from "@mui/material";
import { useNavigate } from "react-router-dom";
import BrancaNeveCover from "../assets/moviesBackground/Disney/LoginBackground.jpg";
import FavoriteIcon from "@mui/icons-material/Favorite";
import bcrypt from "bcryptjs";

const passwHash =
  "$2a$12$SkKwagED5ByENnHoyfXVCeLDDcLCz0625YPBhS5zbXlBIgxRT3sq.";

export default function SignIn() {
  const [user, setUser] = useState("");
  const [passw, setPassw] = useState("");

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [fade, setFade] = useState(0);
  const [blur, setBlur] = useState(15);
  const [loginOpacity, setLoginOpacity] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
      const timeout = setTimeout(() => {
        setFade(1);
      }, 800);
      return () => clearTimeout(timeout);
    }, []);

  const handleLogin = async (user, password) => {
    try {
      const match = await bcrypt.compare(password, passwHash);

      if (match) {
        setFade(0);
        setTimeout(() => {
          setIsLoggedIn(true);
        }, 1000);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const showBackground = () => {
    if (blur === 0) {
      setBlur(15);
      setLoginOpacity(1);
    } else {
      setBlur(0);
      setLoginOpacity(0);
    }
  };

  if (isLoggedIn) {
    navigate("/home");
  }

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#060D17",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        fontWeight: "700",
      }}
    >
      <div
        className="background"
        style={{
          backgroundColor: "#060D17",
          backgroundImage: `url(${BrancaNeveCover})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "absolute",
          filter: `blur(${blur}px)`,
          transition: "filter 0.5s ease-out",
        }}
      />
      <div
        style={{
          position: "relative",
          opacity: fade,
          transition: "opacity 0.5s ease-out",
        }}
      >
        <Box
          sx={{
            backgroundColor: "white",
            minWidth: "200px",
            minHeight: "400px",
            borderRadius: "5px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            padding: "20px",
            opacity: loginOpacity,
            transition: "opacity 0.5s ease-out",
          }}
        >
          <h2 style={{ marginTop: "-20px" }}>Login</h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              padding: "20px",
              alignItems: "start",
            }}
          >
            <InputLabel
              sx={{
                color: "#060D17",
                fontSize: "15px",
                marginTop: "-100px",
                alignSelf: "center",
                fontWeight: "700",
              }}
            >
              Bem vindo, Christina!
            </InputLabel>
            <FavoriteIcon sx={{ color: "red", alignSelf: "center" }} />
            <InputLabel
              sx={{
                color: "#060D17",
                fontSize: "15px",
                marginTop: "15px",
              }}
            >
              Senha
            </InputLabel>
            <TextField
              sx={{ minWidth: "300px" }}
              variant="standard"
              size="small"
              onChange={(e) => setPassw(e.target.value)}
              type="password"
            />
          </div>
          <Button
            variant="contained"
            onClick={handleLogin}
            sx={{
              backgroundColor: "#060D17",
              color: "white",
              borderRadius: "5px",
              fontWeight: "700",
            }}
            onClickCapture={() => handleLogin(user, passw)}
          >
            Entrar
          </Button>
        </Box>
        <Button
          onClick={showBackground}
          sx={{ color: "white", fontWeight: 700, marginTop: "10px" }}
        >
          Plano de fundo
        </Button>
      </div>
    </div>
  );
}
