import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ComponentReportServiceService } from 'src/app/service/component-report-service.service';

@Component({
  selector: 'app-calculathours',
  templateUrl: './calculathours.component.html',
  styleUrls: ['./calculathours.component.css']
})
export class CalculathoursComponent implements OnInit {
  form!:FormGroup;
  constructor(public service:ComponentReportServiceService, private formB:FormBuilder) { }

  ngOnInit(): void {

    this.form=this.formB.group({
      technicalIdentification:['',[Validators.required]],
      numberWeek:[null,[Validators.required]]
    })

  }
   array:Array<any>=[];
  calculate(){
    let arr:Array<any>=[];
    let fechas:Array<any>=[];
   
    this.service.calculatehours(this.form.get('technicalIdentification')?.value).subscribe(response =>{
      fechas= Object.values(response);
      
     

      arr.push(this.form.get("numberWeek")?.value);

      for(let i=0;i<fechas[0].length; i++){
      
        arr.push(Object.values(response)[0][i].startDate);
        arr.push(Object.values(response)[0][i].finishDate);
       }
      
      this.service.calculate(arr).subscribe(data=>{
       this.array.push(data);
       
      })
    })
  }

}
