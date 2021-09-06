export class  SelectListItemCars{
  disabled: boolean | undefined;
  group?: any;
  selected: boolean | undefined;
  text: string | undefined;
  value: string | undefined;
}

export class AddCarService_VM {
  id: number=0;
  warnings: string='';
  recommendations: string='';
  serviceName: string='';
  /*ServicePriceCriteria: string,//valjda*/
  dateofServiceWarranty: string='';
  dateOfServiced: string='';
  description: string='';
  price: number=0;
  selectedCar: string='';
  cars: SelectListItemCars[] | undefined;
  //Cars: string // lista i auta interfejs !!
}
/*export interface AddCarService_VM {
  id: number,
  warnings: string,
  recommendations: string,
  serviceName: string,
  /*ServicePriceCriteria: string,//valjda
  dateofServiceWarranty: Date,
  dateOfServiced: Date,
  description: string,
  price: number,
  selectedCar: string,
  cars: SelectListItemCars[]
  //Cars: string // lista i auta interfejs !!
}*/
