import { Component } from '@angular/core';
import { DataserviceService } from '../Service/dataservice/dataservice.service';
import { ErrorManagerService } from '../Service/ErrorServiceManager/error-manager.service';
import { ErrorModel } from '../Service/ErrorServiceManager/ErrorModel.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  //IMPORT DEI SERVICE
  constructor(public dataSrv: DataserviceService, private LogError:ErrorManagerService) {}
 //USARE CLASS E NON INTERFACE
  ComponenError: ErrorModel = new ErrorModel

  AddLogTest()
  {
    //CONSIDERARE SE VA GIU LA LINEA E IL REITERARE IL METODO FINCHE NON VA
    //FORSE PER FAR FUZIONARE QUESTO BISOGNA CREARE UN MODEL IN UN FILE A PARTE COME GLI ALTRI E IMPORTARLO
    this.ComponenError.errorLogID=0
    this.ComponenError.errorTime=new Date ()
    this.ComponenError.userName= "Test3"
    this.ComponenError.errorNumber=3
    this.ComponenError.errorSeverity=3
    this.ComponenError.errorState=3
    this.ComponenError.errorProcedure="Test3"
    this.ComponenError.errorLine=3
    this.ComponenError.errorMessage="Test3"

    //FUNZIONA - SOSTITUIRE I CAMPI STATCI CON QUELLI DINAMICI DEL TRY CATCH
    this.LogError.SendErrorLogToDB(this.ComponenError
    //   ={
    //   errorLogID: 0,
    //   errorTime: new Date (),
    //   userName: "Test3",
    //   errorNumber: 3,
    //   errorSeverity: 3,
    //   errorState: 3,
    //   errorProcedure: "Test3",
    //   errorLine: 3,
    //   errorMessage: "Test3",
    // }
    )
  }

  ngOnInit(): void {
    console.log(this.dataSrv.ServiceWorkConsole())
  }
}
