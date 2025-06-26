import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Board } from './core/models/board.model';
import { testBoardInit } from './core/models/test-board';
import { GameBoardComponent } from './features/game/components/game-board/game-board.component';
//import { GameBoardComponent } from './features/game/components/game-board/game-board.component';

@Component({
  selector: 'app-root',
  standalone: true,
  //templateUrl: './app.component.html',
  //template: `<h1>Test Board Init - Check Console</h1>`,
  //templateUrl: './app.component.html',
  template: `<app-game-board></app-game-board>`,
  styleUrl: './app.component.scss',
  imports: [GameBoardComponent],
})
export class AppComponent implements OnInit {
  title = 'Xiangqii';
  ngOnInit() : void{
    // Initialize the game board and log the pieces to the console
    console.debug("AppComponent initialized");
    console.debug("Initializing Test Board...");
    testBoardInit();
  }
}

// export class AppComponent {
//   title = 'Xiangqii';
  
// }
