import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ComponentReportServiceService } from 'src/app/service/component-report-service.service';

@Component({
  selector: 'app-calculathours',
  templateUrl: './calculathours.component.html',
  styleUrls: ['./calculathours.component.css']
})
export class CalculathoursComponent implements OnInit {
  form!:FormGroup;
  constructor(public service:ComponentReportServiceService, private formB:FormBuilder, private router:Router) { }

  ngOnInit(): void {

    this.form=this.formB.group({
      technicalIdentification:['',[Validators.required]],
      numberWeek:[null,[Validators.required]]
    })

  }
   array:Array<any>=[];
   bandera:boolean=false;
  calculate(){
    let arr:Array<any>=[];
    let fechas:Array<any>=[];

    let anio:string="";

        for(let j=0;j<4;j++){
              anio+=this.form.get("numberWeek")?.value[j];
            }

    
    var json = JSON.parse(`{"techId": "${this.form.get('technicalIdentification')?.value}",
                                    "anio": "${anio}"}`)
                                    console.log(json);
                                    
                                    
    this.service.calculatehours(json).subscribe(response =>{
     console.log(response);
      fechas= Object.values(response);
      
     arr.push(this.form.get("numberWeek")?.value);

      for(let i=0;i<fechas[0].length; i++){
      
        arr.push(Object.values(response)[0][i].startDate);
        arr.push(Object.values(response)[0][i].finishDate);
       }
       console.log(arr);
       
       
            
            

      this.service.calculate(arr).subscribe(data=>{
        console.log(data);
        if(data==null){
          alert("No existen registros");
          this.router.navigate(['calculate']);
        }else{
       this.array.push(data);
       this.bandera=true;
      }
      })
    })
  }

}
