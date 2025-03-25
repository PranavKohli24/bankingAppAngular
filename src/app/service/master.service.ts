import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponseModel, Application } from '../model/application.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http:HttpClient) { }

  addNewApplication(obj:Application){
    return this.http.post("https://projectapi.gerasim.in/api/BankLoan/AddNewApplication",obj)
  }
}
