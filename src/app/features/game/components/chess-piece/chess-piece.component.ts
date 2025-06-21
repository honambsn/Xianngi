import { Component, Input } from '@angular/core';
import { Piece } from '../../../../core/models/piece.model';

@Component({
  selector: 'app-chess-piece',
  standalone: true,
  templateUrl: './chess-piece.component.html',
  styleUrl: './chess-piece.component.scss',
  //imports: [],
})
export class ChessPieceComponent {
  @Input() piece!: Piece;

  get pieceString(): string {
const type = this.piece.type.toString().toLowerCase();  // ensure string
  const player = this.piece.player.toString().toLowerCase();
  
    //return this.piece ? `${this.piece.type}${this.piece.color}` : '';
    return `assets/images/pieces/${type}-${player}.png`;

  }
}
