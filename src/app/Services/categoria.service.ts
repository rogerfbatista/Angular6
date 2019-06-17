import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import "rxjs/Rx";
import { Categoria } from '../Models/Categoria';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CategoriaService {
          
  private UrlDotnet:string;

  constructor(private http: Http) {
    this.UrlDotnet = environment.baseUrlDotneCore
   }

  ObterCategorias() {
    const url = this.UrlDotnet + "/v2/categorias";

    return this.http.get(url)
      .map(res => res.json())
      .catch(this.handleError);
  }

  ObterCategoriasId(id: number) {
    const url = this.UrlDotnet + "/v1/categorias/" + id;
    return this.http.get(url)
      .map(res => res.json())
      .catch(this.handleError);
  }

 NovaCategoria(categoria:Categoria) {
  const url = this.UrlDotnet + "/v1/categorias/"

    return this.http.post(url,categoria)
      .map(res => res.json())
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error(error); // log to console instead
    return Promise.reject(error);
  }
}
