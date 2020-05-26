import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerFormComponent } from './components/player-form/player-form.component';
import { GridComponent } from './components/grid/grid.component';
import { PlayersGuard } from './share/guard/player.guard';

const routes: Routes = [
  { path: 'player', component: PlayerFormComponent },
  { path: '', redirectTo: 'player', pathMatch: 'full' },
  {
    path: 'game',
    component: GridComponent,
    canActivate: [PlayersGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
