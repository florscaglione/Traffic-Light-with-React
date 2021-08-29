import React, { useState } from "react";
import TrafficLights from "./TrafficLights.jsx";

const TrafficLightBox = () => {
	const [lightOn, setLightOn] = useState("");
	const [lightColorSelected, setLightColorSelected] = useState("");
	const lightColors = [
		{ id: 1, color: "red-light" },
		{ id: 2, color: "orange-light" },
		{ id: 3, color: "green-light" }
	];

	return (
		<div className="container d-flex flex-column align-items-center">
			<div className="traffic-box-pole "></div>
			<div className="traffic-box">
				{lightColors.map(lightColor => {
					const lit = (lightOn, lightColorSelected) => {
						setLightOn(lightOn);
						setLightColorSelected(lightColorSelected);
					};
					return (
						<TrafficLights
							key={lightColor.id}
							lightColor={lightColor.color}
							lit={lit}
							lightColorSelected={lightColorSelected}
							lightOn={lightOn}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default TrafficLightBox;
