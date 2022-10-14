import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Comic } from '../models/Comic';
import { ComicArray } from '../models/ComicArray';
import { Credenciales } from '../models/Credenciales';
import { NewComic } from '../models/NewComic';
import { NewComicResponse } from '../models/NewComicResponse';
import { NewUsuario } from '../models/NewUsuario';
import { NewUsuarioResponse } from '../models/NewUsuarioResponse';
import { UsuariosList } from '../models/UsuariosList';
const BE_API = environment.api;
const header = {headers: new HttpHeaders().set('Content-Type', 'application/json')}

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

  getComics(){
    let url: string = BE_API + '/comics';
    return this.http.get<ComicArray>(url, header);
  }

  insertaComics(nombre: string, yimpress: string, sinopsis: string, editorial: string, usuario:string){
    let url: string = BE_API + '/comics';
    let comics : NewComic = new NewComic(nombre, yimpress, sinopsis, editorial, usuario);
    return this.http.post<NewComicResponse>(url, comics, header);

  }

  getUsuarios(usuario: string, password: string){
    let url: string = BE_API + '/login';
    let usuarios : Credenciales = new Credenciales(usuario, password);
    console.log(usuarios);
    return this.http.post<UsuariosList>(url, usuarios, header);
  }

  insertaUsuarios(nombre: string, usuario: string, password: string, fecha_nac: Date, sexo: string){
    let url: string = BE_API + '/usuarios';
    let usuarios : NewUsuario = new NewUsuario(nombre, usuario, password, fecha_nac, sexo);
    return this.http.post<NewUsuarioResponse>(url, usuarios, header);

  }

  borrarComics(comics: Comic){
    let url: string = BE_API + '/comics/' + comics.id;
    return this.http.delete<NewUsuarioResponse>(url, header);
  }

  editarComics(comics: Comic){
    let url: string = BE_API + '/comics/' + comics.id;
    return this.http.put<NewUsuarioResponse>(url, comics, header);
  }
}
