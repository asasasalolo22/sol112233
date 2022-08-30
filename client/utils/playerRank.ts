import { WheelNumber } from "../types/GameTypes";
import { PlayerRankColor, PlayerRole } from "../types/PlayerTypes";
// export const playerRankHex = (n: WheelNumber): string => {
// 	if (n === 2) return "#FC8181";
// 	if (n === 3) return "#63b3ed";
// 	if (n === 5) return "#F6E05E";
// 	if (n === 50) return "#B794F4";
// 	throw Error("Invalid wheel number");
// };

export const playerRankToChakra = (
	rank: number,
	role: PlayerRole,
): PlayerRankColor => {
	if (role === "Admin") return "green";
	if (rank < 200) return "purple";
	if (rank < 400) return "blue";
	if (rank < 600) return "red";
	if (rank < 800) return "orange";
	return "yellow";
};
