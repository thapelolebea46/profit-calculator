import React from "react";
import ProfitIntro from "./ProfitIntro";
import Navbar from "./Navbar";

function Home() {
  return (
    <div>
      <Navbar label="Get Started" path="/calculate" />

      <ProfitIntro />
    </div>
  );
}

export default Home;
