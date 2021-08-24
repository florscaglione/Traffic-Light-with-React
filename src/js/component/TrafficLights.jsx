import React from "react";
import PropTypes from "prop-types";

const TrafficLight = ({ lightColor, isOn }) => {
	return <div className={lightColor + " " + isOn}></div>; //no entiendo este componente: ni los paramentros que lepasa ni el return
};

TrafficLight.propTypes = {
	lightColor: PropTypes.string,
	isOn: PropTypes.func
};

export default TrafficLight;
