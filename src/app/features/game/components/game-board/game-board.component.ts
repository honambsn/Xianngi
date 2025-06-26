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
  offsetX = 15;
  offsetY = 15;
  hoveredPiece: Piece | null = null;

  transform(piece: Piece): string {
    // Calculate the position of the piece based on its row and column
    const x = this.getX(piece.position.col);
    const y = this.getY(piece.position.row);
    const scale = this.hoveredPiece === piece ? 1.1 : 1; // Scale up on hover
    const cx = x + this.cellSize / 2; // Center the piece in the cell
    const cy = y + this.cellSize / 2; // Center the piece in the cell

    return `translate(${cx}, ${cy}) scale(${scale}) translate(${-this.cellSize / 2}, ${-this.cellSize / 2})`;

  }
  
  ngOnInit(): void {
    // Initialize the game board with pieces
    //this.board.initPieces();
    
    // Log the pieces to the console for debugging
    //console.log('Game Board Pieces:', this.board.pieces);
    console.debug('Game Board set up');
  }

  getX(col: number): number {
    return col * this.cellSize;
    //return col * this.cellSize + this.offsetX;
  }

  getY(row: number): number {
    return row * this.cellSize;
    //return row * this.cellSize - this.offsetY;
  }

  pieceImage(piece: Piece): string {
    const type = piece.type.toString().toLowerCase();
    const player = piece.player.toString().toLowerCase();
    return `assets/images/pieces/${type}-${player}.png`;
  }
}
