import { Component, DoCheck, OnInit } from '@angular/core';
import { LoginManagerService } from '../Service/LoginServiceManager/login-manager.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit,DoCheck{
  
  constructor(private LoginUser: LoginManagerService) {   }
  UserIsLogin:boolean = this.LoginUser.IsLogin

  ngOnInit(): void {
    this.LoginUser.ngOnInit()
  }

  ngDoCheck(): void {
  this.UserIsLogin= this.LoginUser.IsLogin
  }

  LogoutComp()
  {
    this.LoginUser.Logout()
  }

}
