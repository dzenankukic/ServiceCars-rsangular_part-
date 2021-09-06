import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyConfig } from 'src/app/MyConfig';
import { DetailsCarService_VM } from '../_models/DetailsCarService_VM';
import { EditCarService_VM } from '../_models/EditCarService_VM';

@Component({
  selector: 'app-DetailsCarService',
  templateUrl: './DetailsCarService.component.html',
  styleUrls: ['./DetailsCarService.component.css']
})
export class DetailsCarServiceComponent implements OnInit {

  @Input()
  servis: DetailsCarService_VM | undefined;
  SID!: number;
  constructor(private http: HttpClient,private route: ActivatedRoute) { }

  ngOnInit() {

  }
  blist(){
    window.location.reload();
  }


}
