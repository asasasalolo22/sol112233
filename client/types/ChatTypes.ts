import { PlayerRole } from "./PlayerTypes";

export type MessageItemT = {
	message: string;
	rank: number;
	role: PlayerRole;
	user: string;
};
