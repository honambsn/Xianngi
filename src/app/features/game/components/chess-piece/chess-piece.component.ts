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

  get pieceImage(): string {
    const type = this.piece.type.toString().toLowerCase();
    const player = this.piece.player.toString().toLowerCase();
    return `src/assets/images/pieces/${type}-${player}.png`;
  }
}
