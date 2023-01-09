import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ErrorModel } from './ErrorModel.model';


@Injectable({
  providedIn: 'root'
})
export class ErrorManagerService {
  constructor(private http: HttpClient) {}
  // ReadLog: ErrorModel


  SendErrorLogToDB(ReceivedLog:ErrorModel)
   {
    // this.ReadLog={errorLogID: 0,
    //   errorTime: ReceivedLog.errorTime,
    //   userName: ReceivedLog.userName,
    //   errorNumber: ReceivedLog.errorNumber,
    //   errorSeverity: ReceivedLog.errorSeverity,
    //   errorState: ReceivedLog.errorState,
    //   errorProcedure: ReceivedLog.errorProcedure,
    //   errorLine: ReceivedLog.errorLine,
    //   errorMessage: ReceivedLog.errorMessage
    // }
    this.http.post("https://localhost:7188/api/ErrorLogs", ReceivedLog)
      .subscribe(resp => { }
        
        )
  }

}
