
import { Component, OnInit } from '@angular/core';
import {TaskService} from "../task.service";

export class Login{

  public username: string;
  public password: string;
  constructor(
    username:string,
    password:string

  ) {

    this.username=username,
      this.password=password
  }
}

@Component({
  selector: 'app-login',
  templateUrl: "./login.component.html",
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login =new Login("","");
  constructor(private service:TaskService) { }

  ngOnInit(): void {
  }

  public Login(){
    console.log(this.login)
    this.service.doCreateTask(this.login).subscribe(res =>{
      console.log(res);
    });
  }

}
