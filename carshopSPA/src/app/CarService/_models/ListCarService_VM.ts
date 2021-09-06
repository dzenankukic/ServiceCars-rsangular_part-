export interface Servisi {
id: number;
serviceName: string;
dateOfServiced: string;
dateofServiceWarranty: string;
price: number;
carName: string;
}



export interface ListCarService_VM {
  list: Servisi[];
  total: number;
}
