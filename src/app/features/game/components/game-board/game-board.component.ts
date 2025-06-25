import { Component, OnInit } from '@angular/core';
import { Board } from '../../../../core/models/board.model';
import { Piece } from '../../../../core/models/piece.model';
import { ChessPieceComponent } from './../chess-piece/chess-piece.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-game-board',
  standalone: true,
  templateUrl: './game-board.component.html',
  styleUrl: './game-board.component.scss',
  imports: [
    CommonModule,
    ChessPieceComponent
  ],
})
export class GameBoardComponent implements OnInit {
  board = new Board();
  cellSize = 60;
  
    ngOnInit(): void {
    // Initialize the game board with pieces
    //this.board.initPieces();
    
    // Log the pieces to the console for debugging
    console.log('Game Board Pieces:', this.board.pieces);
  }

  getX(col: number): number {
    return col * this.cellSize - this.cellSize / 2;
  }

  getY(row: number): number {
    return row * this.cellSize - this.cellSize / 2;
  }

  pieceImage(piece: Piece): string {
    const type = piece.type.toString().toLowerCase();
    const player = piece.player.toString().toLowerCase();
    return `assets/images/pieces/${type}-${player}.png`;
  }
}
