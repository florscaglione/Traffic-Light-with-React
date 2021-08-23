//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import TrafficLightBox from "./component/TrafficLightBox.jsx";

//render your react application
ReactDOM.render(<TrafficLightBox />, document.querySelector("#app"));
