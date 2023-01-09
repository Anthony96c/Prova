import { Injectable } from '@angular/core';
// import { ConsoleReporter } from 'jasmine';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor() { }

ServiceWorkConsole()
{
  console.log("Il data service funziona correttamente")
}

}
