import { Injectable } from '@angular/core';
import { Board } from '../models/board.model';
import { Position } from '../models/position.model';
import { Player } from '../models/player.enum';
import { Piece } from '../models/piece.model';

@Injectable({
  providedIn: 'root'
})
export class GameLogicService {

  board: Board = new Board();
  currentPlayer: Player = Player.Red;
  selectedPiece: Piece | null = null;

  selectPiece(pos: Position): void{
    const piece = this.board.getPieceAt(pos);
    if (piece && piece.player === this.currentPlayer) {
      this.selectedPiece = piece;
      console.debug(`Selected piece: ${piece.id}`);
    }
  }

  getValidMoves(): Position[] {
    if (!this.selectedPiece) {
      return [];
    }
    return this.selectPiece.getValidMoves(this.board);
  }

  moveTo(pos: Position): void {
    if (!this.selectedPiece) {
      console.debug("No piece selected for moving.");
      return;
    }

    const validMoves = this.getValidMoves();
    if (validMoves.some(move => move.row === pos.row && move.col === pos.col)) {
      this.board.movePiece(this.selectedPiece, pos);
      console.debug(`Moved piece to: ${pos.row}, ${pos.col}`);
      
      this.switchTurn();
      this.selectedPiece = null; // Deselect after moving
    } else {
      console.warn("Invalid move attempted.");
    }
  }
  switchTurn() {
    this.currentPlayer = this.currentPlayer === Player.Red ? Player.Black : Player.Red; // Switch player
  }
}
