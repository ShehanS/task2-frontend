import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';

const URL = "http://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class RESTClientService {

  constructor(private httpClinet: HttpClient) { }


generateJWT(user: any){
  
  return new Promise(resolve =>{
    this.httpClinet.post(URL+'/jwt-genarator', user).subscribe(response =>{
      resolve(response);
    }, err =>{
      console.log(err);
    }
    )
  });
}


  
gettingJWT(){
  return new Promise(resolve =>{
    this.httpClinet.get(URL+'/jwt-genarator').subscribe(response =>{
      resolve(response);
    }, err =>{
      console.log(err);
    }
    )
  });
}


  
validateJWT(token: string){
  const params = new HttpParams()
  .set('jwt', token);

  return new Promise(resolve =>{
    this.httpClinet.get(URL+'/jwt-validate', {params}).subscribe(response =>{
      resolve(response);
    }, err =>{
      console.log(err);
    }
    )
  });
}








}
