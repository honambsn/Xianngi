import { Routes } from '@angular/router';
import { MainGameComponent } from './pages/main-game/main-game.component';
import { GameModeComponent } from './pages/game-mode/game-mode.component';


export const routes: Routes = [
    {path: '', redirectTo: 'game', pathMatch: 'full'},
    {path: 'game', component: MainGameComponent},
    {path: 'mode', component: GameModeComponent},
];
