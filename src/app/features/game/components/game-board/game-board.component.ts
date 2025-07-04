import { Component, OnInit } from '@angular/core';
import { Board } from '../../../../core/models/board.model';
import { Piece } from '../../../../core/models/piece.model';
import { ChessPieceComponent } from './../chess-piece/chess-piece.component';
import { CommonModule } from '@angular/common';
import { Position } from '../../../../core/models/position.model';
import { Player } from '../../../../core/models/player.enum';
import { GameLogicService } from '../../../../core/services/game-logic.service';
import { ChangeDetectorRef } from '@angular/core';

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

  selectedPiece: Piece | null = null;
  validMoves: Position[] = [];

  currentPlayer : Player = Player.Red; // Default to Red player

  constructor(
    private gameLogic: GameLogicService,
    private cdr: ChangeDetectorRef
  ) {}

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

  getPieceAt(row: number, col: number): Piece | null {
    return this.board.pieces.find(
      p => !p.isCaptured && p.position.row === row && p.position.col === col
    ) || null;
  }

  onCellClick(row: number, col: number): void {
    const pos = {row, col};
    const targetPiece = this.getPieceAt(row, col);

    // if (this.selectedPiece){
    //   if (this.gameLogic.isMoveValid(this.selectedPiece, pos, this.board)) {
    //     try {
    //       this.gameLogic.movePiece(this.selectedPiece, pos, this.board);
    //       this.currentPlayer = this.currentPlayer === Player.Red ? Player.Black : Player.Red; // Switch player
    //     } catch (error) {
    //       console.error('Invalid move:', error);
    //     }
    //   }
    //   this.clearSelection();
    // }
    // else if (targetPiece && targetPiece.player === this.currentPlayer) {
    //   // Select the piece if it belongs to the current player
    //   this.selectedPiece = targetPiece;
    //   this.validMoves = this.gameLogic.getValidMoves(targetPiece, this.board);
    // } else {
    //   // Deselect the piece if clicked on an empty cell or opponent's piece
    //   this.clearSelection();
    // }

    if (this.selectedPiece){
      if (this.isValidMove(row, col)){
        this.gameLogic.movePiece(this.selectedPiece, pos, this.board);
        this.switchTurn(); // Switch player after a valid move
        //this.cdr.detectChanges(); // Ensure the view updates
      }
      this.clearSelection();
    }
    else if (targetPiece && targetPiece.player === this.currentPlayer) {
      // Select the piece if it belongs to the current player
      this.selectedPiece = targetPiece;
      this.validMoves = this.gameLogic.getValidMoves(targetPiece, this.board);
    } else {
      // Deselect the piece if clicked on an empty cell or opponent's piece
      this.clearSelection();
    }
  }

  isValidMove(row: number, col: number): boolean {
    return this.validMoves.some(pos => pos.row === row && pos.col === col);
  }

  clearSelection(): void {
    this.selectedPiece = null;
    this.validMoves = [];
    this.hoveredPiece = null; // Clear hovered piece when selection is cleared
  }

  switchTurn(): void {
    this.currentPlayer = this.currentPlayer === Player.Red ? Player.Black : Player.Red;
  }
}
