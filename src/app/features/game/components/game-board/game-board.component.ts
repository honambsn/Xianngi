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
  
  rows = Array.from({length: 10}, (_, i) => i);
  cols = Array.from({length: 9}, (_, i) => i);

  getPieceAt(row: number, col: number): Piece | null {
    return this.board.pieces.find(p => p.position.row === row && p.position.col === col) || null;
  }

  ngOnInit(): void {
    // Initialize the game board with pieces
    //this.board.initPieces();
    
    // Log the pieces to the console for debugging
    console.log('Game Board Pieces:', this.board.pieces);
  }
}
