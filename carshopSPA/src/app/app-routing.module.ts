import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCarServiceComponent } from './CarService/AddCarService/AddCarService.component';
import { DetailsCarServiceComponent } from './CarService/DetailsCarService/DetailsCarService.component';
import { EditCarServiceComponent } from './CarService/EditCarService/EditCarService.component';
import { ListCarServiceComponent } from './CarService/ListCarService/ListCarService.component';

const routes: Routes = [
  {path:'addnew',component: AddCarServiceComponent},
  {path:'list',component: ListCarServiceComponent},
  {path:'edit',component: EditCarServiceComponent},
  {path:'details',component: DetailsCarServiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
