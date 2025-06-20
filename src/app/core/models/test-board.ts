import { Board } from "./board.model";

export function testBoardInit(): void {
    const board = new Board();
    console.log("Initial Board Pieces:", board.pieces);

    for (const piece of board.pieces) {
        console.log(`Piece ID: ${piece.id}, Type: ${piece.type}, Player: ${piece.player}, Position: (${piece.position.row}, ${piece.position.col}), Captured: ${piece.isCaptured}`);
    }
}