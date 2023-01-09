import { Component } from '@angular/core';
import { CustomerAddress } from './Model/CustomerAddress';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Customer } from './Model/Customer.component';
import {CustomerOrder } from './Model/CustomerOrder.component';

@Component({
  selector: 'app-data-customer',
  templateUrl: './data-customer.component.html',
  styleUrls: ['./data-customer.component.css']
})
export class DataCustomerComponent {
  SceltaCustomerID: number
  DataCustomer: Customer
  AddressCustomer: CustomerAddress
  checkSeeCA=false;
  checkSeeCO=false;
  OrderCustomer: CustomerOrder[]=[]

  constructor(private http: HttpClient) { }

  GetCustomerID() {
    this.http.get("https://localhost:7037/api/Customers/" + this.SceltaCustomerID)
      .pipe(map((response: Customer) => {
        return response
      }))
      .subscribe(resp => {
        this.DataCustomer = resp
        console.log(this.DataCustomer)
      })
  }

  SeeCustomerAddress() {
    this.checkSeeCA = !this.checkSeeCA;
    this.GetCustomerAddressID()
  }
  SeeCustomerOrder() {
    this.checkSeeCO = !this.checkSeeCO;
    this.GetCustomerOrder()
  }




  GetCustomerAddressID() {
    this.http.get("https://localhost:7037/api/sp_GetCustomerAddress/" + this.SceltaCustomerID)
      .pipe(map((response: CustomerAddress) => {
        return response
      }))
      .subscribe(resp => {
        this.AddressCustomer = resp
        console.log(this.AddressCustomer)
      })
  }

  GetCustomerOrder() {
    this.http.get("https://localhost:7037/api/sp_GetCustomerOrder/" + this.SceltaCustomerID)
      .pipe(map((response: CustomerOrder[]) => {
        return response
      }))
      .subscribe(resp => {
        this.OrderCustomer = resp
        console.log(this.OrderCustomer)
      })
  }

}



  // GetAllCustomers()
  // {
  //   this.http.get("https://localhost:7037/api/Customers/")
  //   .pipe(map((response: Customer[]) => {
  //    return response
  //   }))
  //   .subscribe(resp => {
  //     this.AllCustomers = resp
  //   })
  // }

// }
