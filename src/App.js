import "./App.css";
import Carousel from "./Carousel/Carousel";
import { useState } from "react";

function App() {
  const slides = [
    "https://picsum.photos/id/1032/900/400",
    "https://picsum.photos/id/1033/900/400",
    "https://picsum.photos/id/1037/900/400",
    "https://picsum.photos/id/1035/900/400",
    "https://picsum.photos/id/1036/900/400",
  ];
  return (
    <div className="container">
      <Carousel slides={slides} />
    </div>
  );
}

export default App;
