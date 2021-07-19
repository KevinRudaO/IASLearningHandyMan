import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { serviceReport } from '../model/serviceReport';

@Injectable({
  providedIn: 'root'
})
export class ComponentReportServiceService {
  private url:string="http://localhost:8080/Report";
  private calculourl = "http://localhost:8080/Calculate";
  constructor(private http:HttpClient) { }

  addServiceReport(ServiceReport:serviceReport){

    return this.http.post<serviceReport>(this.url,ServiceReport);
  }

  calculatehours(techId:any){
    const calcu= {techId:techId}
    return this.http.post(this.calculourl,techId);
  }

  calculate(fechas:Object[]){
    return this.http.post(this.calculourl+"/fechas/"+`${fechas}`,"");
      
  }
}
