import React from "react";
import PropTypes from "prop-types";

const TrafficLight = ({ lightColor, isOn }) => {
	return <div className={lightColor + " " + isOn}></div>;
};
TrafficLight.propTypes = {
	lightColor: PropTypes.string,
	isOn: PropTypes.func
};
export default TrafficLight;
