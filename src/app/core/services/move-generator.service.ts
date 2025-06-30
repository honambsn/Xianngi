import { Injectable } from '@angular/core';
import { Piece } from '../models/piece.model';
import { Board } from '../models/board.model';
import { Position } from '../models/position.model';
import { PieceType } from '../models/piece-type.enum';

@Injectable({
  providedIn: 'root'
})
export class MoveGeneratorService {
  getValidMoves(piece: Piece, board: Board): Position[] {
    switch  (piece.type) {
      case PieceType.General:
        return this.getGeneralMoves(piece, board);
      case PieceType.Advisor:
        return this.getAdvisorMoves(piece, board);
      case PieceType.Chariot:
        return this.getChariotMoves(piece, board);
      case PieceType.Cannon:
        return this.getCannonMoves(piece, board);
      case PieceType.Elephant:
        return this.getElephantMoves(piece, board);
      case PieceType.Horse:
        return this.getHorseMoves(piece, board);
      case PieceType.Soldier:
        return this.getSoldierMoves(piece, board);
      default:
        return [];
    }
  }
  private getGeneralMoves(piece: Piece, board: Board): Position[] {
    // Implement logic for General moves
    return [];
  }
  private getAdvisorMoves(piece: Piece, board: Board): Position[] {
    // Implement logic for Advisor moves
    return [];
  }
  private getChariotMoves(piece: Piece, board: Board): Position[] {
    // Implement logic for Chariot moves
    return [];
  }
  private getCannonMoves(piece: Piece, board: Board): Position[] {
    // Implement logic for Cannon moves
    return [];
  }

  private getElephantMoves(piece: Piece, board: Board): Position[] {
    // Implement logic for Elephant moves
    return [];
  }

  private getHorseMoves(piece: Piece, board: Board): Position[] {
    // Implement logic for Horse moves
    return [];
  }
  private getSoldierMoves(piece: Piece, board: Board): Position[] {
    // Implement logic for Soldier moves
    return [];
  }
  



  
}
