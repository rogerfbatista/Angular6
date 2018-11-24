import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { MeuTableComponent } from './Components/meu-table/meu-table.component';
import { HeadBarComponent } from './Components/Shared/head-bar/head-bar.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';

@NgModule({
  declarations: [
    
    MeuTableComponent,
    HeadBarComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    
  ],
  providers: [],
  bootstrap: [HomePageComponent]
})
export class AppModule { }
