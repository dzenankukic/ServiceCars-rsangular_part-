import {  HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbAlertModule, NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddCarServiceComponent } from './CarService/AddCarService/AddCarService.component';
import { DetailsCarServiceComponent } from './CarService/DetailsCarService/DetailsCarService.component';
import { EditCarServiceComponent } from './CarService/EditCarService/EditCarService.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListCarServiceComponent } from './CarService/ListCarService/ListCarService.component';


@NgModule({
  declarations: [
    AppComponent,
    AddCarServiceComponent,
    DetailsCarServiceComponent,
    EditCarServiceComponent,
    ListCarServiceComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NgbPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: 'AddCarService', component: AddCarServiceComponent},
      { path: 'EditCarService', component: EditCarServiceComponent},
      { path: 'DetailsCarService', component: DetailsCarServiceComponent}
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
