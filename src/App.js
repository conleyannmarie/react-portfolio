import React, { useState } from "react";
import "./App.css";

import About from "./components/About";
import ContactForm from "./components/Contact";
import Resume from "./components/Resume";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";

function App() {
  const [presentPage, setPresentPage] = useState("About");

  function pageNew() {
    switch (presentPage) {
      case "Contact":
        return <ContactForm />;

      case "Resume":
        return <Resume />;

      case "Portfolio":
        return <Portfolio />;

      default:
        return <About />;
    }
  }

  return (
    <div>
      <Nav
        presentPage={presentPage}
        setPresentPage={setPresentPage}
      ></Nav>
      <div>
        {

        }
        <div>
          {newPage(presentPage)}
        </div>
      </div>
    </div>
  );
}

export default App;
