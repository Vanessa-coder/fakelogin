import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username;
  public password;
  public rightuser='asdf';
  public rightpass='poi';

  constructor() { }

  ngOnInit(): void {
  }

  loginMethod(username, password){
    if(password!=this.rightpass){
      alert("Wrong user/password");
    }
    else{
      alert("Welcome");
    }
    
  }

}

