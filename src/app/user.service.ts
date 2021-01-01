import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userLogged = false;
  userName: string;

  constructor() { }

  auth(login: string, password: string){
    console.log(login, password);
    this.userLogged = true;
    this.userName = login;
  }
}
