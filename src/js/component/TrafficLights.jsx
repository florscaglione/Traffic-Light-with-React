import React from "react";
import PropTypes from "prop-types";

const TrafficLight = ({ lit, lightColor, lightOn, lightColorSelected }) => {
	return (
		<div
			className={lightColor === lightColorSelected ? lightOn : lightColor}
			onClick={() => lit(`${lightColor} light-on`, lightColor)}></div>
	);
};

TrafficLight.propTypes = {
	lit: PropTypes.func,

	lightOn: PropTypes.string,
	lightColor: PropTypes.string,
	lightColorSelected: PropTypes.string
};

export default TrafficLight;
