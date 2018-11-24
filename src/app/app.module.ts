import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuTableComponent } from './Components/meu-table/meu-table.component';
import { HeadBarComponent } from './Components/Shared/head-bar/head-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuTableComponent,
    HeadBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
