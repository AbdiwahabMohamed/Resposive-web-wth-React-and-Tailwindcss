import React from "react";
import reactLogo from "./assets/react.svg";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Analytics from "./component/Analytics";
import NewsLetter from "./component/Newsletter";
import Cards from "./component/Cards";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <NewsLetter />
      <Cards />
    </div>
  );
}

export default App;
