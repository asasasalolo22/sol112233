import { PlayerRole } from "./PlayerTypes";

export type UserObject = {
	username: string;
	publicKey: string;
	balance: number;
	role: PlayerRole;
	totalDeposited: number;
	totalWithdrawn: number;
	totalBets: number;
	totalBetBalance: number;
	level: number;
	experience: number;
	rouletteRoundHistory: [];
	wheelRoundHistory: [];
};
