import { Injectable } from '@angular/core';
import { Board } from '../models/board.model';
import { Position } from '../models/position.model';
import { Player } from '../models/player.enum';
import { Piece } from '../models/piece.model';
import { PieceType } from '../models/piece-type.enum';
import { isEmpty } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameLogicService {
  movePiece(piece: Piece, to: Position, board: Board): void{
    const target = board.getPieceAt(to);
    if (target && target.player === piece.player) {
      throw new Error('Cannot move to a position occupied by your own piece');
    }
    if (target && target.player !== piece.player) {
      target.isCaptured = true; // Capture the opponent's piece
    }
    piece.position = to; // Update the piece's position
  }

  isMoveValid(piece: Piece, to: Position, board: Board): boolean {
    const generator = new MoveGeneratorService();
    const validMoves = generator.getValidMoves(piece, board);
    return validMoves.some(pos => pos.row === to.row && pos.col === to.col);
  }

  getAllValidMoves(board: Board, player: Player): { piece: Piece; moves: Position[] }[] {
    const generator = new MoveGeneratorService();
    return board.pieces
      .filter(p => !p.isCaptured && p.player === player)
      .map(p => ({ piece: p, moves: generator.getValidMoves(p, board) }))
      .filter(p => p.moves.length > 0);
  }
}

class MoveGeneratorService {
  getValidMoves(piece: Piece, board: Board): Position[] {
    // This method should be implemented to return valid moves for the piece
    switch (piece.type) {
      case PieceType.General: return this.getGeneralMoves(piece, board);
      case PieceType.Advisor: return this.getAdvisorMoves(piece, board);
      case PieceType.Chariot: return this.getChariotMoves(piece, board);
      case PieceType.Cannon: return this.getCannonMoves(piece, board);
      case PieceType.Elephant: return this.getElephantMoves(piece, board);
      case PieceType.Horse: return this.getHorseMoves(piece, board);
      case PieceType.Soldier: return this.getSoldierMoves(piece, board);
      default: return [];
    }
  }

  private isInBounds(r: number, c: number): boolean {
    return r >= 0 && r < 10 && c >= 0 && c < 9;
  }

  private isEmpty(board: Board, pos: Position): boolean {
    return !board.getPieceAt(pos);
  }

  private isEnemy(board: Board, piece: Piece, pos: Position): boolean {
    const target = board.getPieceAt(pos);
    return target !== null && target.player !== piece.player;
  }

  private getGeneralMoves(piece: Piece, board: Board): Position[] {
    const moves: Position[] = [];
    const palaceCols = [3, 4, 5];
    const palaceRows = piece.player === Player.Red ? [7, 8, 9] : [0, 1, 2];
    const directions = [
       { row: -1, col: 0 }, // Up
      { row: 1, col: 0 }, // Down
      { row: 0, col: -1 }, // Left
      { row: 0, col: 1 } // Right
    ];

    for (const d of directions){
      const r = piece.position.row + d.row;
      const c = piece.position.col + d.col;
      const pos = { row: r, col: c };

      if (palaceRows.includes(r) && palaceCols.includes(c) &&
          (this.isEmpty(board, pos) || this.isEnemy(board, piece, pos))) {
        moves.push(pos);
      }
    }

    return moves;
  }

  private getAdvisorMoves(piece: Piece, board: Board): Position[] {
    // Implement logic for Advisor moves
    const moves: Position[] = [];
    const palaceCols = [3, 4, 5];
    const palaceRows = piece.player === Player.Red ? [7, 8, 9] : [0, 1, 2];
    const directions = [
      { row: -1, col: -1 }, // Up-Left
      { row: -1, col: 1 }, // Up-Right
      { row: 1, col: -1 }, // Down-Left
      { row: 1, col: 1 } // Down-Right
    ];

    for (const d of directions) {
      const r = piece.position.row + d.row;
      const c = piece.position.col + d.col;
      const pos = { row: r, col: c };

      if (palaceRows.includes(r) && palaceCols.includes(c) &&
          (this.isEmpty(board, pos) || this.isEnemy(board, piece, pos))) {
        moves.push(pos);
      }
    }
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
    const moves: Position[] = [];
    const directions = [
      { row: -2, col: -2 }, // Up-Left
      { row: -2, col: 2 }, // Up-Right
      { row: 2, col: -2 }, // Down-Left
      { row: 2, col: 2 } // Down-Right
    ];

    for (const d of directions) {
      const r = piece.position.row + d.row;
      const c = piece.position.col + d.col;
      const pos = { row: r, col: c };

      if (this.isInBounds(r, c) && this.isEmpty(board, pos)) {
        // Check if the diagonal position is empty
        const midRow = piece.position.row + d.row / 2;
        const midCol = piece.position.col + d.col / 2;
        const midPos = { row: midRow, col: midCol };

        if (this.isEmpty(board, midPos)) {
          moves.push(pos);
        }
      }
    }
    return moves;
    //return [];
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