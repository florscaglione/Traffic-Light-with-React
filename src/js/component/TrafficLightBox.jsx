import React, { useState } from "react";
import TrafficLights from "./TrafficLights.jsx";

const TrafficLightBox = () => {
	const lightColors = [
		{ id: 1, color: "red-light" },
		{ id: 2, color: "orange-light" },
		{ id: 3, color: "green-light" }
	];
	let [lightOn, setLightOn] = useState(false);
	function isOn() {
		lightOn = "light-on"; //xq esta igualdad?
		return !setLightOn ? lightOn : setLightOn; //por qué la negacion? con la interrogacion siempre se esta preguntando si es true,x eso? y el else es "setLightOn"?
	}
	return (
		<div className="container d-flex flex-column align-items-center">
			<div className="traffic-box-pole "></div>
			<div className="traffic-box">
				{lightColors.map(lightColor => {
					return (
						<TrafficLights
							lightColor={lightColor.color}
							key={lightColor.id} //que se pone de key? se q es obligatoria en los .maps de react
							onClick={isOn}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default TrafficLightBox;
