import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import "rxjs/Rx";
import { Categoria } from '../Models/Categoria';

@Injectable({
  providedIn: 'root'
})

export class CategoriaService {

  constructor(private http: Http) { }

  ObterCategorias() {
    return this.http.get('http://localhost:5000/v2/categorias')
      .map(res => res.json())
      .catch(this.handleError);
  }

  ObterCategoriasId(id: number) {
    return this.http.get('http://localhost:5000/v1/categorias/' + id)
      .map(res => res.json())
      .catch(this.handleError);
  }

 NovaCategoria(categoria:Categoria) {
    return this.http.post('http://localhost:5000/v1/categorias/',categoria)
      .map(res => res.json())
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error(error); // log to console instead
    return Promise.reject(error);
  }
}
