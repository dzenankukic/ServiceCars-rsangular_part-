import {HttpHeaders} from '@angular/common/http';

export class MyConfig{
  static adresaServera: string = 'https://p2071.app.fit.ba/';
  static httpOpcije= {
    headers:new HttpHeaders({
      "Content-Type": "application/json",
    })
  };
}
/*'https://p2071.app.fit.ba/' */
