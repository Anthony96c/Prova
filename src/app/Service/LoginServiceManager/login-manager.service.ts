import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginModel } from './LoginModel.model';
import { map, Observable } from 'rxjs';
import { NgIf } from '@angular/common';
import { ThisReceiver } from '@angular/compiler';
import { Router } from '@angular/router';


// HttpHeaderOptions = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json',
//     'Authorization': 'Basic ' + btoa(':')
//   })
// }

@Injectable({
  providedIn: 'root'
})
export class LoginManagerService {
  LoginUsername: string = ''
  // LoginPassword:string = ''
  Credential: string = ''

  ReturnDB: LoginModel = new LoginModel
  IsLogin: boolean = false
  IsLogout: boolean = false
  HttpHeaderOptions = {}


  constructor(private http: HttpClient, private Router: Router) { }



  ngOnInit(): void 
  {
    if (this.IsLogout == true) 
    {
      localStorage.clear()
      localStorage.setItem('IsDisconnected', JSON.stringify(false));
      localStorage.setItem('Credientials', JSON.stringify(btoa('')));
      this.IsLogout=false
    }
  }


InitialAuthorization()
{
  localStorage.clear()
  localStorage.setItem('IsDisconnected', JSON.stringify(false));
  localStorage.setItem('Credientials', JSON.stringify(btoa(this.Credential)));
  this.HttpHeaderOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + (btoa(this.Credential))
    })
  }
}

CheckLoginDB()
{
  this.http.get("https://localhost:7037/api/DataUsers/" + this.LoginUsername, this.HttpHeaderOptions)
    .pipe(map((response: LoginModel) => {
      return response
    }))
    .subscribe(resp => {
      this.ReturnDB = resp
      console.log(this.ReturnDB.userName)
      console.log(this.IsLogin)
      if (this.ReturnDB.userName == this.LoginUsername) {
        this.IsLogin = true
      }
      console.log(this.IsLogin, 'API')
      console.log(this.ReturnDB, 'API')

      //Codice per reinderizzare il componente
      let currentUrl = this.Router.url;
      this.Router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.Router.navigate([currentUrl]);
      }); //Per reindirizzare un componente this.Router.navigate(['/Customer']);

    })
}


Logout()
{
  this.LoginUsername=''
  this.Credential=''
  this.HttpHeaderOptions = {}
  this.IsLogin=false
  this.IsLogout=true
  this.ReturnDB=null

  localStorage.setItem('IsDisconnected', JSON.stringify(false));
  localStorage.removeItem('Credentials')
}


}