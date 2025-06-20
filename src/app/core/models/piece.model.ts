import { PieceType } from "./piece-type.enum";
import { Player } from "./player.enum";
import { Position } from "./position.model";

export interface Piece {
    id: string; // Unique identifier for the piece
    type: PieceType; // Type of the piece (e.g., General, Advisor, etc.)
    player: Player;
    position: Position; // Current position of the piece on the board
    isCaptured: boolean; // Indicates if the piece is captured
}
