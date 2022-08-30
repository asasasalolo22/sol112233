import { WheelNumber } from "../types/GameTypes";

export const wheelNumbersArray: WheelNumber[] = [
	2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 5, 2, 5, 2, 3, 2, 3, 2, 3, 2, 5, 2, 5, 2, 3,
	2, 3, 2, 3, 2, 5, 50, 5, 2, 3, 2, 3, 2, 3, 2, 5, 2, 5, 2, 3, 2, 3, 2, 3, 2, 5,
	2, 5,
];

export const wheelNumberArrayPositionToWheelNumber = (n: number): WheelNumber =>
	wheelNumbersArray[n];

export const wheelNumberToHex = (n: WheelNumber): string => {
	if (n === 2) return "#FC8181";
	if (n === 3) return "#63b3ed";
	if (n === 5) return "#F6E05E";
	if (n === 50) return "#B794F4";
	throw Error("Invalid wheel number");
};

export const wheelNumberToChakra = (n: WheelNumber): string => {
	if (n === 2) return "red";
	if (n === 3) return "blue";
	if (n === 5) return "yellow";
	if (n === 50) return "purple";
	throw Error("Invalid wheel number");
};
