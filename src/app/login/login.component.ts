import { Component } from '@angular/core';
import { LoginManagerService } from '../Service/LoginServiceManager/login-manager.service';
import { LoginModel } from '../Service/LoginServiceManager/LoginModel.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {

  User: string
  Password: string
  CheckLogin: boolean = this.LoginUser.IsLogin

  constructor(private LoginUser: LoginManagerService, private Router: Router) { }

  ngOnInit(): void {
    if(this.CheckLogin==true)
    {
      this.Router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.Router.navigate(['/']);});
    }
  }


  FrontSendCheckDB() {
    this.LoginUser.LoginUsername = this.User
    // this.LoginUser.LoginPassword=this.Password
    this.LoginUser.Credential = this.User + ':' + this.Password
    this.LoginUser.InitialAuthorization()
    this.LoginUser.CheckLoginDB()
  }

}
