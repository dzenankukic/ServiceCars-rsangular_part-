import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyConfig } from 'src/app/MyConfig';
import { EditCarService_VM } from '../_models/EditCarService_VM';
import { AlertifyService } from '../_service/Alertify.service';

@Component({
  selector: 'app-EditCarService',
  templateUrl: './EditCarService.component.html',
  styleUrls: ['./EditCarService.component.css']
})
export class EditCarServiceComponent implements OnInit {
 @Input()
  servisedit: EditCarService_VM | undefined;
  SID!: number;
  constructor(private http: HttpClient,private route: ActivatedRoute,private alertify:AlertifyService) { }

  ngOnInit():void {
   /* this.dodaj();*/
  }
  /*dodaj() {
    this.http.get<EditCarService_VM>(MyConfig.adresaServera + 'Service/Edit/' + this.servisedit?.id).subscribe((result) => {
      this.servisedit = result;

     console.log(this.servisedit);
      console.log(this.servisedit);
    });
  }*/
  onSubmit()
  {
    console.log(this.servisedit);
    console.log("poslije");
   /*  console.log(data);
   let form= JSON.stringify(data);
    console.log(form);*/
    this.alertify.warning("Uspiješno editovan servis!");
    this.http.post(MyConfig.adresaServera + "Service/EditSave", this.servisedit , MyConfig.httpOpcije).subscribe((result)=>{
      console.log("Rezulatat");
      console.log(result);
      window.location.reload();
    });

  }
  Spasi() {
    if(this.servisedit != undefined){
    console.log(this.servisedit);
    this.http.post(MyConfig.adresaServera + "Service/EditSave", this.servisedit , MyConfig.httpOpcije).subscribe((result)=>{
      console.log("Rezulatat");
      console.log(result);
      window.location.reload();
    });}
    else{
      console.log("Error")
    }
}
blist(){
  window.location.reload();
}
}
