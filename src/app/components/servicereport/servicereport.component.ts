import { getLocaleDateTimeFormat } from '@angular/common';
import { TokenizeResult } from '@angular/compiler/src/ml_parser/lexer';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { serviceReport } from 'src/app/model/serviceReport';
import { ComponentReportServiceService } from 'src/app/service/component-report-service.service';

@Component({
  selector: 'app-servicereport',
  templateUrl: './servicereport.component.html',
  styleUrls: ['./servicereport.component.css']
})

export class ServicereportComponent implements OnInit {

      public forms!:FormGroup;
     
      constructor(public ComponentRService:ComponentReportServiceService,public routing:Router,private formBuilder:FormBuilder) {}

      

  ngOnInit(): void {

    this.forms=this.formBuilder.group({
      technicalIdentification:['',[Validators.required]],
      serviceIdentification:['',[Validators.required]],
      startDate:[null,[Validators.required]],
      finishDate:[null,[Validators.required]]
    })
  
  }
  


  addReport():any{
    const Servicereport = new serviceReport();
   
   //let newStart=new Date(this.forms.get("startDate")?.value);
  // let newFinish = new Date (this.forms.get("finishDate")?.value);
      
      if (this.forms.get("startDate")?.value < this.forms.get("finishDate")?.value){
       
        Servicereport.technicalIdentification=this.forms.get('technicalIdentification')?.value;
        Servicereport.serviceIdentification=this.forms.get('serviceIdentification')?.value;
        Servicereport.startDate=this.forms.get('startDate')?.value;
        Servicereport.finishDate=this.forms.get('finishDate')?.value; 

        this.ComponentRService.addServiceReport(Servicereport).subscribe(response=>{
          alert ("Service added!")
          location.reload();
          })

      }else {
        alert ("fecha inicial es mayor que la fecha final")
      }
    
  }
   

}
