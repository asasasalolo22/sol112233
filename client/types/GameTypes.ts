export type WheelNumber = 2 | 3 | 5 | 50;

export type PlayerBetT = { money: number };

export type PlayerStatus = "blue" | "purple" | "yellow";

// export type TablePositionItems = {
// 	username: string;
// 	id: string;
// 	rank: PlayerStatus;
// 	bet: number;
// 	color: WheelNumber;
// 	count: number;
// };

// export type TablePositionItemsPerUserId = {
// 	string: TablePositionItems[];
// };

// export type TablePositionsPerWheelNumber = {
// 	wheelNumber: WheelNumber;
// 	positions: TablePositionItems[];
// };
// {"id":"62eecdf524fc7efb3cb44d6d","bet":2,"color":2}

export type TablePositionItemT = {
	username: string;
	rank: number;
	bet: number;
	color: string;
	count: number;
};

export type TablePositionObject = {
	[x: string]: TablePositionItemT;
};

export type ColorTablePositions = {
	positions: TablePositionObject;
};

export type AllTablePositions = {
	2: ColorTablePositions;
	3: ColorTablePositions;
	5: ColorTablePositions;
	50: ColorTablePositions;
};
