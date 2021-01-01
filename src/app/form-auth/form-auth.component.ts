import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-form-auth',
  templateUrl: './form-auth.component.html',
  styleUrls: ['./form-auth.component.scss']
})
export class FormAuthComponent implements OnInit {

  userName = '';
  userPassword = '';

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  sendForm(){
    if (this.userName.length > 0 && this.userPassword.length > 0){
      this.userService.auth(this.userName, this.userPassword);
      document.getElementById('exampleModal').classList.remove('show');
      document.querySelector('.modal-backdrop').classList.remove('show');
    }else if (this.userName.length === 0 && this.userPassword.length === 0){
      alert('check your login and password length');
    }else if (this.userName.length === 0){
      alert('check your login length');
    }else if (this.userPassword.length === 0){
      alert('check your password length');
    }
  }
}
