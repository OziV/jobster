import React from "react";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import main from "../assets/images/undraw_feeling_proud_qne1.svg";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            voluptatum voluptates nobis cupiditate architecto voluptate animi,
            sunt aliquid facilis atque! Necessitatibus sint veniam iste! Aut
            consequuntur rerum nostrum aperiam accusantium. Sed labore quae
            recusandae nisi error eius similique ea consectetur. Id soluta
            exercitationem at magnam reprehenderit voluptates obcaecati
            provident cupiditate?
          </p>
          <Link to="/register" className="btn btn-hero">
            login / sign up
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
}

export default Landing;
