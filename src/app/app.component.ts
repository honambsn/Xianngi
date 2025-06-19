import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GameBoardComponent } from './features/game/components/game-board/game-board.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [GameBoardComponent]
})
export class AppComponent {
  title = 'Xiangqii';
}
