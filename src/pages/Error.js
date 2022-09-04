import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage";
import img from "../assets/images/undraw_page_not_found_re_e9o6.svg";

function Error() {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={img} alt="not found"></img>
        <h3>Page Not Found</h3>
        <Link to="/">back home</Link>
      </div>
    </Wrapper>
  );
}

export default Error;
