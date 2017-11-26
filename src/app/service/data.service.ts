import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class DataService {

  constructor(private http: Http) { }


  register(){
    this.http.get('api/register')
    .toPromise().then(data=>{
      console.log(data)
    }).catch(err=>{
      console.log(err)
    })
  }

}
