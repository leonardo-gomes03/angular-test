import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChampionListComponent } from './components/champion-list/champion-list.component';
import { ChampionCardComponent } from './components/champion-card/champion-card.component';
import { ChampionsService } from './services/champions.service';

@NgModule({
  declarations: [
    AppComponent,
    ChampionListComponent,
    ChampionCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ChampionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
