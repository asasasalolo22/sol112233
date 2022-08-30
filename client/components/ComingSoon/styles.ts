import styled from "styled-components";

const wheelBorderSize = 2;
const PI = 3.14159;
const wheelColor = "#F7FAFC";
const wheelBorderColor = "rgba(0,0,0,0)";
const arrowColor = "lightGray";
const resetDuration = 1;
const spinningDuration = 6;
const nbTurns = 5;

export const WheelContainer = styled.div<{ size: number }>`
	display: block;
	position: relative;
	box-sizing: content-box;
	width: ${(props) => props.size}px;
	height: ${(props) => props.size}px;
	padding: 1px;
	margin: auto;
	border-radius: 50%;
	user-select: none;
	&:before {
		content: "";
		display: block;
		position: absolute;
		height: 0%;
		width: 0%;
		top: ${(props) => (props.size - 15) / 2}px;
		transform: translateY(50%);
		transform: rotate(180deg);
		z-index: 2;
		border: solid transparent 15px;
		border-left-width: 0;
		right: 15px;
		border-right-color: ${arrowColor};
	}
	&:after {
		content: "";
		display: block;
		position: absolute;
		height: 0%;
		width: 0%;
		top: ${(props) => {
			return (props.size - 30) / 2;
		}}px;
		transform: translateY(50%);
		transform: rotate(180deg);
		z-index: 2;
		border: solid transparent 15px;
		border-left-width: 0;
		right: 15px;
		border-right-color: ${arrowColor};
	}
`;

export const Wheel = styled.div<{
	nbItems: number;
	selectedItem: number;
	size: number;
}>`
	display: block;
	position: relative;
	box-sizing: content-box;
	margin: auto;
	width: ${(props) => props.size + wheelBorderSize}px;
	height: ${(props) => props.size + wheelBorderSize}px;
	border-radius: 50%;
	background-color: ${wheelBorderColor};
	transition: transform ${resetDuration}s;
	transform: rotate(0deg);
	cursor: pointer;

	&.spinning {
		transition: transform ${spinningDuration}s;
		transform: rotate(
			calc(
				(${nbTurns}) * 360deg +
					(
						-360deg * ${(props) => props.selectedItem} / ${(props) => props.nbItems}
					)
			)
		);
	}
`;

export const WheelItem = styled.div<{
	nbItems: number;
	itemNb: number;
	bgColor: string;
	size: number;
}>`
	display: block;
	position: absolute;
	background-color: ${(props) => props.bgColor};
	/* border-top: ${wheelBorderSize}px solid ${wheelBorderColor}; */

	// item position
	top: 50%;
	left: 50%;
	width: 50%;
	height: ${(props) => (props.size * PI) / props.nbItems}px;

	transform-origin: center left;
	transform: translateY(-50%)
		rotate(${(props) => props.itemNb * (360 / props.nbItems)}deg);
`;
