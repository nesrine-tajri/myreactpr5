import React from "react";
import "./Offers.css";
import Photo from "../../Assets/exclusive_image.png";
function Offers() {
  return (
    <div className="offers">
      <div>
        <h1>exclusive offers <br></br>for you</h1>
        <p>only on best sellers products</p>
        <button>cheack now</button>
      </div>
      <div>
        <img src={Photo} />
      </div>
    </div>
  );
}

export default Offers;
