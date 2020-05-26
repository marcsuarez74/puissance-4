// Module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

// ngxs mmodule
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';

//state
import { PlayerState } from '../app/utils/store/states/player.state';
import { ThemeState } from './utils/store/states/theme.state';
import { RouteState } from './utils/store/states/route.state';
import { MobileState } from './utils/store/states/mobile.state';

// Component
import { AppComponent } from './app.component';
import { GridComponent } from './components/grid/grid.component';
import { PlayerFormComponent } from './components/player-form/player-form.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlayerComponent } from './components/grid/player/player.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    PlayerFormComponent,
    ToolbarComponent,
    PlayerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxsModule.forRoot([PlayerState, ThemeState, MobileState, RouteState]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
