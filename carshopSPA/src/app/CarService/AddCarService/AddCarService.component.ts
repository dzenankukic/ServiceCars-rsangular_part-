import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MyConfig } from 'src/app/MyConfig';
import { AddCarService_VM, SelectListItemCars } from '../_models/AddCarService_VM';
import { Servisi } from '../_models/ListCarService_VM';
import { AlertifyService } from '../_service/Alertify.service';


@Component({
  selector: 'app-AddCarService',
  templateUrl: './AddCarService.component.html',
  styleUrls: ['./AddCarService.component.css']
})
export class AddCarServiceComponent implements OnInit {

  constructor(private http: HttpClient,private aleritfy:AlertifyService) { }
  @Input()
  addservis : AddCarService_VM | undefined ;

  ngOnInit(): void {
    this.dodaj();
  }
  dodaj() {
    this.http.get<AddCarService_VM>(MyConfig.adresaServera + 'Service/AddService').subscribe((result) => {
      this.addservis = result;

     console.log(this.addservis);
      console.log(this.addservis.cars);
    });
  }
  onSubmit()
  {
    console.log("poslije");
    console.log(this.addservis);
   /* let form= JSON.stringify(data);
    console.log(form);*/
    if(this.addservis?.selectedCar != null && this.addservis.serviceName != null){
      this.aleritfy.success("Uspiješno dodan servis !")

      this.http.post(MyConfig.adresaServera + "Service/AddSave", this.addservis , MyConfig.httpOpcije).subscribe((result)=>{
      console.log("Rezulatat");
      console.log(result);
      window.location.reload();
    });
  }
  else{
      this.aleritfy.error("Pokušajte ponovo dodati servis!")
  }
  }
  odaberiAuto(car: any)
  {
if(this.addservis != undefined)
{
    this.addservis.selectedCar = car.target.value;
}
  }

  // != undefined
  /*Save()
  {
     this.http.post(MyConfig.adresaServera + "/Service/Add", this.servisedit , MyConfig.httpOpcije)
     .subscribe((result)=>{
      alert("Uspijesno dodan servis");
      window.location.reload();
     });
  }*/
}
