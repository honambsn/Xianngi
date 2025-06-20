import { PieceType } from "./piece-type.enum";
import { Piece } from "./piece.model";
import { Player } from "./player.enum";
import { Position } from "./position.model";

export class Board {
    pieces: Piece[] = [];

    constructor(){
        this.initializePieces();
    }

    private initializePieces(): void {
        const setup: {type: PieceType, positions: Position[], player: Player}[] = [
            // --- Chariot (Xe) ---
            { type: PieceType.Chariot, positions: [{ row: 0, col: 0 }, { row: 0, col: 8 }], player: Player.Black },
            { type: PieceType.Chariot, positions: [{ row: 9, col: 0 }, { row: 9, col: 8 }], player: Player.Red },

            // --- Horse (Mã) ---
            { type: PieceType.Horse, positions: [{ row: 0, col: 1 }, { row: 0, col: 7 }], player: Player.Black },
            { type: PieceType.Horse, positions: [{ row: 9, col: 1 }, { row: 9, col: 7 }], player: Player.Red },

            // --- Elephant (Tượng) ---
            { type: PieceType.Elephant, positions: [{ row: 0, col: 2 }, { row: 0, col: 6 }], player: Player.Black },
            { type: PieceType.Elephant, positions: [{ row: 9, col: 2 }, { row: 9, col: 6 }], player: Player.Red },

            // --- Advisor (Sĩ) ---
            { type: PieceType.Advisor, positions: [{ row: 0, col: 3 }, { row: 0, col: 5 }], player: Player.Black },
            { type: PieceType.Advisor, positions: [{ row: 9, col: 3 }, { row: 9, col: 5 }], player: Player.Red },

            // --- General (Tướng) ---
            { type: PieceType.General, positions: [{ row: 0, col: 4 }], player: Player.Black },
            { type: PieceType.General, positions: [{ row: 9, col: 4 }], player: Player.Red },

            // --- Cannon (Pháo) ---
            { type: PieceType.Cannon, positions: [{ row: 2, col: 1 }, { row: 2, col: 7 }], player: Player.Black },
            { type: PieceType.Cannon, positions: [{ row: 7, col: 1 }, { row: 7, col: 7 }], player: Player.Red },

            // --- Soldier (Tốt) ---
            { type: PieceType.Soldier, positions: [
                { row: 3, col: 0 }, { row: 3, col: 2 }, { row: 3, col: 4 }, { row: 3, col: 6 }, { row: 3, col: 8 }
                ], player: Player.Black },
            { type: PieceType.Soldier, positions: [
                { row: 6, col: 0 }, { row: 6, col: 2 }, { row: 6, col: 4 }, { row: 6, col: 6 }, { row: 6, col: 8 }
                ], player: Player.Red },        
        ];

        let idCounter = 0;
        for (const item of setup){
            for (const pos of item.positions){
                this.pieces.push({
                    id: `${item.player} - ${item.type} - ${idCounter++}`,
                    type: item.type,
                    player: item.player,
                    position: pos,
                    isCaptured: false
                });
            }
        }
    }
}
