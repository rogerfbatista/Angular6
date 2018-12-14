import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../Services/categoria.service';
import { Categoria } from '../../Models/Categoria'

@Component({
  selector: 'lista-categorias',
  templateUrl: './lista-categorias.component.html',
  styleUrls: ['./lista-categorias.component.css'],
  providers:[CategoriaService]

})
export class ListaCategoriasComponent implements OnInit {
        listaCategoria:Categoria[];
          erroMensagem :string;

  constructor(private service:CategoriaService) {

   }

  ngOnInit() {
    this.ObterCategoria();

  }

    ObterCategoria():void
    {
      this.service.ObterCategorias().subscribe(data=> this.listaCategoria =data,error=> console.error(error));
  }

}
