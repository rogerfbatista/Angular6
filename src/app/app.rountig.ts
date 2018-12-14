// --ts responsalvel rotas das paginas linkSync

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeuTableComponent } from './Components/meu-table/meu-table.component';
import { CategoriaComponent } from './Components/categoria/categoria.component';
import { ListaCategoriasComponent } from './Components/lista-categorias/lista-categorias.component';

const appRoutes: Routes = [
    { path: 'MinhaTabela', component: MeuTableComponent },
    { path: 'Categoria', component: CategoriaComponent },
    { path: 'ListaCategoria', component: ListaCategoriasComponent },
    
  
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);