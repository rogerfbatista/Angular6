import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.rountig'


//Componentes paginas
import { MeuTableComponent } from './Components/meu-table/meu-table.component';
import { HeadBarComponent } from './Components/Shared/head-bar/head-bar.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { CategoriaComponent } from './Components/categoria/categoria.component';
import { ListaCategoriasComponent } from './Components/lista-categorias/lista-categorias.component';

//services
import { CategoriaService } from './Services/categoria.service';

@NgModule({
  declarations: [
    
    MeuTableComponent,
    HeadBarComponent,
    HomePageComponent,
    CategoriaComponent,
    ListaCategoriasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [HomePageComponent]
})
export class AppModule { }
