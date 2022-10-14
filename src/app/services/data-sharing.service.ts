import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Comic } from '../models/Comic';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  private loginSource = new BehaviorSubject<string>('')

  currentLogin = this.loginSource.asObservable();

  comicsSource = new BehaviorSubject<Comic>(new Comic(0,"","","","",""));
  currentComics = this.comicsSource.asObservable();
  constructor() { }

  setComics(comics: Comic){
    this.comicsSource.next(comics);
  }
  changeLogin(usuario: string) {
    this.loginSource.next(usuario);
  }
}
