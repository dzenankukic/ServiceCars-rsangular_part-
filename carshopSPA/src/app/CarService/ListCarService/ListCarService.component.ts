import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { MyConfig } from 'src/app/MyConfig';
import { DetailsCarService_VM } from '../_models/DetailsCarService_VM';
import { EditCarService_VM } from '../_models/EditCarService_VM';
import { ListCarService_VM, Servisi } from '../_models/ListCarService_VM';
import { AlertifyService } from '../_service/Alertify.service';

@Component({
  selector: 'app-ListCarService',
  templateUrl: './ListCarService.component.html',
  styleUrls: ['./ListCarService.component.css']
})
export class ListCarServiceComponent implements OnInit {

  ListCarServiceVM: ListCarService_VM | undefined;
  DetailCarServiceVM: DetailsCarService_VM | undefined;
  EditCarServiceVM: EditCarService_VM | undefined;
  pageSize = 5;
  currentPage = 1;
  trazi: string ="";
  servisi: Servisi[] | undefined;
  servis:DetailsCarService_VM | undefined;
  collectionSize = 5;
  constructor(private http: HttpClient,config: NgbModalConfig,
    private modalService: NgbModal,
    private alertify:AlertifyService,
    ) {
    config.backdrop = 'static';
    config.keyboard = false;
   }


  /*open() { MODAL
    this.modalService.open();
  }*/

  preuzmipodatke(){
    this.http.get<ListCarService_VM>(MyConfig.adresaServera + 'Service/prikaz?currentPage='
    + this.currentPage + '&q=' + this.trazi , MyConfig.httpOpcije)
    .subscribe((result)=>{
      this.servisi = result.list;
      this.ListCarServiceVM = result;
      console.log(result);
      console.log(this.servisi);
      console.log(this.ListCarServiceVM);
   console.log(this.trazi);
      if(this.servisi.length == 0)
      {
        console.log("Nije uredu");
      }
    });
  }


  ngOnInit() {
    this.preuzmipodatke();
    //podatke preuzet
  }

  getservisi()
  {
    console.log('servisi');
    console.log(this.ListCarServiceVM?.list);
    return this.ListCarServiceVM?.list;
  }
  pageNumberChanged($event: any) {
    this.preuzmipodatke();
  }

  pretraga() {
    this.currentPage = 1;
    this.preuzmipodatke();
  }

  obrisi(s: Servisi) {
    this.http.get(MyConfig.adresaServera+ "Service/Delete?ID="+s.id).subscribe((result)=>{
        let indexof = this?.ListCarServiceVM?.list.indexOf(s) ?? 0; // Pronaci drugo rijesenje
        if(indexof == 0)
        {
          this.alertify.error("Uspiješno obrisani podaci za servis!");
          /*alert("Osvjezite stranicu!");*/
          return;
        }
        this.ListCarServiceVM?.list.splice(indexof, 1);
        /*alert("Podaci o servisu uspješno obrisani! Brisanje povrede");*/
        this.alertify.error("Uspiješno obrisani podaci za servis!");
    });
  }
  details(s: Servisi) {
    this.http.get<DetailsCarService_VM>(MyConfig.adresaServera + 'Service/Details?ID=' + s.id).subscribe((result) => {
      this.DetailCarServiceVM = result;
      console.log(this.DetailCarServiceVM);
    });
  }
  uredi(s: number) {
    console.log(this.EditCarServiceVM)
    this.http.get<EditCarService_VM>(MyConfig.adresaServera + 'Service/Edit?ID=' + s).subscribe((result) => {
      this.EditCarServiceVM = result;
      console.log(this.EditCarServiceVM);
    });
  }

 /* edit(s: Servisi)
  {
    this.http.get<EditCarService_VM>(MyConfig.adresaServera + 'Service/Edit?ID=' + s.id).subscribe((result) => {
      this.EditCarServiceVM = result;
      console.log(this.EditCarServiceVM);
  });
}*/
}
