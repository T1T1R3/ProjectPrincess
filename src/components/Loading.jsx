import CircularProgress from "@mui/joy/CircularProgress";
import BrancaNeveCover from "../assets/moviesBackground/Disney/LoginBackground.jpg";

export default function LoadingScreen() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
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
          color: "white",
          fontWeight: "700",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "absolute",
          filter: "blur(10px)",
        }}
      />
      <CircularProgress color="neutral" size="lg" variant="plain" />
    </div>
  );
}
