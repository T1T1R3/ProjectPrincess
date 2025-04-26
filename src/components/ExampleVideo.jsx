import React from "react";
import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";

function ExampleVideo() {

    const url = "https://www.dailymotion.com/embed/video/k3hDzmPfWTWihCCVSXy?api=postMessage"
    return (
      <>
      
        <iframe style={{border:'none', backgroundColor:'black'}} src={url}
          allowfullscreen="allowfullscreen"
          mozallowfullscreen="mozallowfullscreen" 
          msallowfullscreen="msallowfullscreen" 
          oallowfullscreen="oallowfullscreen" 
          webkitallowfullscreen="webkitallowfullscreen"
          width="640" height="480"> </iframe> 

      </>
    )
  }
  
  export default ExampleVideo